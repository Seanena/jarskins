<script setup>
import { ref } from 'vue';
import  { useProductStore } from '@/stores/products'
import { computed, watchEffect } from 'vue'
import { RouterLink } from 'vue-router';

const name = ref('');
const address = ref('');
const phoneNumber = ref('');
const note = ref('')
const paymentMethod = ref('');

const storeProduct = useProductStore()


function formatNumberWithCommas(number) {
    const formattedNumber = Number(number).toFixed(2);
    return formattedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");   
}

const totalOverallPrice = computed(() => {
  return storeProduct.CartList.reduce((total, product) => total + product.totalProductPrice, 0)
})

watchEffect(() => {
  for (const product of storeProduct.CartList) {
    product.totalProductPrice = product.quatity * product.PriceCal
  }
})

const removeFromCart = (productId) => {
  storeProduct.removeFromCart(productId);
};


const placeOrder = () => {
    const hasInvalidQuantity = storeProduct.CartList.some(product => product.quatity <= 0);

    if (hasInvalidQuantity) {
        alert("จำนวนสินค้าต้องมากกว่า 0");
    } else {
        const orderData = {
            orderNumber: storeProduct.OrderList.length + 1,
            CartList: storeProduct.CartList,
            Total: storeProduct.totalOverallPrice,
            name: name.value,
            address: address.value,
            phoneNumber: phoneNumber.value,
            note: note.value,
            payment: paymentMethod.value,
        };
        alert("สั่งซื้อสำเร็จ! ตรวจสอบรายละเอียดการสั่งซื้อได้ที่ รายการสั่งซื้อ \uD83D\uDE0E \uD83D\uDE0E \nขอบพระคุณอย่างยิ่ง");
        storeProduct.addOrder(orderData);

    }
}

</script>

<template>
    <div v-if="storeProduct.CartList.length === 0" class="incompletecart mb-3">
      <div class="container-xl mt-3" style="background-color: #333; height: 40px; border-radius: 5px;">
        <table style="background-color: #333; text-align: center vertical-align:middle;">
          <thead class="top">
            <a href="" style="color: red; margin-right: 20%;">cart</a>
            <RouterLink to="/buyorder" >
              <a href="">history</a>
            </RouterLink>
          </thead>
        </table>
      </div>
      <div class="outcon" style="width: 100%; margin: 0 auto;">
            <div class="container-xl mt-2" style="background-color: #333; border-radius: 10px; height: 300px;">
                <div class="bd-example table-container ">
                <table class="table"  style="text-align: center; vertical-align: middle;">
                    <thead class="thead-dark">
                    <tr>
                    <th scope="col" style="width:40%; background-color: #333; color: #d9d9d9;">ข้อมูลสินค้า</th>
                    <th scope="col" style="width:10%; background-color: #333; color:#d9d9d9;">ราคา</th>
                    <th scope="col" style="width:10%; background-color: #333;color:#d9d9d9;">วิธีชำระเงิน</th>
                    <th scope="col" style="width:20%; background-color: #333;color:#d9d9d9;">สถานะ</th>
                    </tr>
                </thead>
                <br>
                <tbody style="color: #333;">
                    <tr v-for="(productData, index) in storeProduct.CartList" :key="index">
                    <td>
                        <div class="product-grid">
                        <div class="product-image">
                        <img :src="productData.img" alt="" style="width: 70%;">
                        </div>
                        <div class="product-name">
                        <span>{{ productData.Name }}</span>
                        </div>
                        </div>
                    </td>
                    <td>{{ productData.Price }}</td>
                    <td>Promtpay</td>
                    <td>
                        <button class="btn btn-danger" @click="removeFromCart(productData.id)" style="width: 60%; background-color: red; color: white;">
                            DELETE
                        </button>
                    </td>
                    </tr>
                    
                </tbody>

                </table>
                </div>
            </div>
        </div>       
    </div>


    <div v-else class="completecart">
      <div class="container-xl mt-3" style="background-color: #333; height: 40px; border-radius: 5px;">
        <table style="background-color: #333; text-align: center vertical-align:middle;">
          <thead class="top">
            <a href="" style="color: red;">cart</a>
            <RouterLink to="/historyorder">
              <a href="">history</a>
            </RouterLink>
          </thead>
        </table>
      </div>
        <div class="outcon" style="width: 100%; margin: 0 auto;">
            <div class="container-xl mt-2" style="background-color: #333; border-radius: 10px;">
                <div class="bd-example table-container ">
                <table class="table"  style="text-align: center; vertical-align: middle;">
                    <thead class="thead-dark">
                    <tr>
                    <th scope="col" style="width:40%; background-color: #333; color: #d9d9d9;">ข้อมูลสินค้า</th>
                    <th scope="col" style="width:10%; background-color: #333; color:#d9d9d9;">ราคา</th>
                    <th scope="col" style="width:10%; background-color: #333;color:#d9d9d9;">วิธีชำระเงิน</th>
                    <th scope="col" style="width:20%; background-color: #333;color:#d9d9d9;">สถานะ</th>
                    </tr>
                </thead>
                <br>
                <tbody style="color: #333;">
                    <tr v-for="(productData, index) in storeProduct.CartList" :key="index">
                    <td>
                        <div class="product-grid">
                        <div class="product-image">
                        <img :src="productData.img" alt="" style="width: 70%;">
                        </div>
                        <div class="product-name">
                        <span>{{ productData.Name }}</span>
                        </div>
                        </div>
                    </td>
                    <td>{{ productData.Price }}</td>
                    <td>Promtpay</td>
                    <td>
                        <button class="btn btn-danger" @click="removeFromCart(productData.id)" style="width: 60%; background-color: red; color: white;">
                            DELETE
                        </button>
                    </td>
                    </tr>
                    
                </tbody>

                </table>
                <div class="detailbill" style="color: white;">
                    <p>รวม : {{ formatNumberWithCommas(totalOverallPrice) }} บาท</p>
                    <hr>
                    <form action="" @submit.prevent="placeOrder">

                        <div class="panelbuttcon">
                                <input type="submit" class="btn btn-success" style="margin: auto; margin-bottom: 1%;" value="ยืนยันการสั่งซื้อ" >
                        </div>
                    </form>
                    
                </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300&display=swap');

/* Reset default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'IBM Plex Sans Thai', sans-serif;
}

/* Set the background color for the whole page */
body {
  background-color: #ffffff;
}

/* Apply pointer cursor to buttons on hover */
button:hover {
  cursor: pointer;
}


/* theme */
p,h2{
  color: white;
}
body{
  background-color: #1D2126;
}


/* สไตล์สำหรับเฮดเดอร์ที่กำหนดเอง */
.custom-header {
  width: 100%;
  height: 70px;
  background: #272C33;
  border-bottom: #333 1px solid;
  display: flex;
  padding: 0 40px; /* ปรับการเว้นระยะตามต้องการ */
  box-sizing: border-box;
}

.header-content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ขนาดของรูปภาพสำหรับ icon2 และ icon3 */
.product-icon img {
  width: 40px;
  height: 35px;
}
.header-content p{
  font-size: 10px;
}

/* รูปแบบสำหรับแท็กหลักที่ครอบคลุมกล่อง input */
.input-container {
  display: flex;
  align-items: center;
  border: 1px solid #333; /* กรอบล้อมกล่อง input */
  border-radius: 5px; /* ปรับรูปร่างกรอบ */
  padding: 3px; /* ระยะห่างของข้อมูลภายในกรอบ */
  width: fit-content; /* ปรับขนาดกล่องให้พอดีกับเนื้อหา */
}
a {
  text-decoration: none;
}

.into{
  display: flex;
  align-items: center;
}
.wallet{
  background-color: #000000;
  width: 20%;
  
}
.wallet-input {
  font-size: 14px; /* ปรับขนาดตามความต้องการ */
  border: none;
  width: 100%;
  padding: 0;
  background-color: transparent; /* ลบพื้นหลัง */
}
.product-icon {
  width: 25rem;
  margin-right: -7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-icon a{
  color: lightgray;
  font-size: 16px;
  margin-right: 20px;
}
.product-icon a:hover{
  color: #fff;
}
.logo a{
  font-weight: bold;
  font-size: 20px;
  color: white;
}






footer{
  margin-top: 10rem;
  padding: 0 40px;
}
.site-footer {
  height: 200px;
  background-color: #333; /* สีพื้นหลังของ footer */
  color: #fff; /* สีข้อความใน footer */
  display: flex;
  align-items: center;
  justify-content: space-between;
  
}

.f2{
  display: flex;
  justify-content: space-between;
  width: 20rem;
}
.f1 p{
  color: white;
}
.f2 p{
  color: white;
}


/* profile */
.navbar{
  margin-left: 50px;
  border: 1px #fff solid;
  border-radius: 100rem;
  padding: 4px;
  overflow: hidden;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 10px 10px;
  text-decoration: none;
  display: block;
  text-align: center;
}
.dropdown-content a:hover{
  background-color: lightgray;
}

.dropdown img{
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.dropdown:hover .dropdown-content {
  display: block;
}







/* เอาเหมือนกันลบให้เหลือ header */

.search-box {
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 5px;
  margin-left: auto; /* เลื่อนไปทางขวาสุด */

}

.search-input {
  margin-left: 3rem;
  padding: 5px 19px;
  border: none;
  border-radius: 50px;
  width: 490px;
  box-sizing: border-box;
  border: #333 2px solid;
}

/* สไตล์สำหรับไอคอนรูปตระกูลสินค้า */
.serch-button{
  margin-left: -4.7rem;
  margin-bottom: 2px;
  margin-top: 1.5px;
  width: 75px;
  height: 32px;
  border-radius: 20px;
  font-size: 14px;
  background-color: darkred;
  color: #fff;
}
.serch-button:hover{
  background-color: red;
  color: #fff;
}


/* รูปแบบสำหรับแท็กหลักที่ครอบคลุมกล่อง input */
.input-container {
  display: flex;
  align-items: center;
  border: 1px solid #333; /* กรอบล้อมกล่อง input */
  border-radius: 5px; /* ปรับรูปร่างกรอบ */
  padding: 3px; /* ระยะห่างของข้อมูลภายในกรอบ */
  width: fit-content; /* ปรับขนาดกล่องให้พอดีกับเนื้อหา */
}





/* styles.css */

/* สไตล์สำหรับลิงค์ที่ไม่มีเส้นใต้ */
a {
  text-decoration: none;
}


.table{
  display: flexbox;
  justify-content: center;
  margin-left: 2%;
}
/* รูปแบบสำหรับช่องด้านล่างของ header */
.bottom-bar {
  width: 98%;
  height: 76px;
  background: #272C33;
  display: flex; /* เปิดใช้ Flexbox */
  align-items: center; /* จัดตำแหน่งตรงกลางแนวตั้ง */
  justify-content: center;
  margin-top: 10px; /* ขยับลงมาด้านล่างอีก 10px */
  padding: 10px;
}
.bottom-bar a{
  font-weight: bold;
  font-size: 20px;
}



.order-history {
  color: #ff0000;
  font-size: 14px;
  margin-left: 10px; /* ขยับข้อความไปทางขวา 10px (หรือค่าที่คุณต้องการ) */
}
/* สไตล์สำหรับเส้นคั่น */
.separator {
  width: 1px;
  height: 55px;
  background: #D9D9D9;
  margin: 0 10px; /* ขยับเส้นคั่นไปทางขวาและซ้าย 10px (หรือค่าที่คุณต้องการ) */
}

.sales-history {
  color: #fffdfd; /* เปลี่ยนสีข้อความเป็นสีดำ */
  font-size: 14px;
  margin-left: 10px; /* ขยับข้อความไปทางขวา 10px (หรือค่าที่คุณต้องการ) */
}

.custom-div {
  padding: 20px;
  width: 98%;
  height: 1000px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #272C33;
  margin-top: 10px; /* ขยับลงมาด้านล่างอีก 10px */
}
.custom-div p{
  font-size: 18px;
}
.column{
  margin: 0 auto;
  width: 92%;
  flex-direction: row; /* จัดเรียงแนวนอน */
  justify-content: space-between; /* ให้แต่ละรายการกระจายอย่างเท่าๆ กัน */
  align-items: center;
  display: flex;

}
.info-container {
  display: flex;
  flex-direction: column; /* เปลี่ยนเป็นแนวตั้ง */
  align-items: flex-start; /* จัดตำแหน่งข้อความด้านบนของกล่อง */
  width: 90%;
  height: 862px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #D9D9D9;
  margin-top: 10px; /* ขยับลงมาด้านล่างอีก 10px */
  padding: 20px; /* เพิ่มการเว้นระยะห่างของข้อความ */
}

.info-item {
  margin-right: 20px; /* ระยะห่างระหว่างข้อมูล */
  font-family: 'IM FELL Great Primer';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #000000;
  align-self: flex-start; /* ขยับข้อความขึ้นไปด้านบนของ .info-container */
}

.ropdown-content{
  margin-left: 100px;
}

.info-label {
  color: rgb(253, 253, 253); /* เปลี่ยนสีข้อความเป็นสีดำ */
}

.row{
  margin: 0 auto;
  margin-top: 30px;
  background-color: #B4B3B3;
  width: 97%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 -20px;
}
.row img{
  width: 150px;
  height: 70px;
  border: #1D2126 1px solid;
}
.row button{
  width: 160px;
  height: 70px;
  font-size: 16px;
  background-color: #C93131;
  border: none;
  color: white;
  border-radius: 3px;
}
.row button:hover{
  background-color: darkred;
}
.red{
  color: red;
}
</style>