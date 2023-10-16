<script setup>

</script>

<template>
  
        <!-- เนื้อหาหน้าแอปของคุณ -->
      <div class="table">
        <div class="hi">
          <div class="profile">
            <img src="" alt="">
          </div>
          <div class="protex">
            <h2>0000000000000</h2>
            <h2>Steam ID : 000000</h2>
          </div>
        </div>
      <div class="proinfo">
        <div class="upper">
          <h3><a href="/src/headder/profile.html" class="white">กระเป๋าเงินของฉัน</a></h3>
          <div class="separator"></div>
          <h3><a href="/src/headder/profileedit.html" class="red">การตั้งค่าบัญชี</a></h3>
        </div>
        <div class="line"></div>
        
        <div class="addmoney2">
          <p class="name">ข้อมูลบัญชี</p>
          <p class="name2">รูปโปรไฟล์</p>
          <p class="name3">ชื่อเล่น</p>



        </div>
        <div class="addmoney">
          <p class="name6">การตั้งSteam</p>
          <p class="name4">Steam ID</p>
          <p class="name4">เวลาลงทะเบียน Steam</p>
          <p class="name4">ลิงก์การซื้อขาย Steam</p>
          <p class="name4">SteamAPI KEY</p>
          <p class="name4">เปิดเผย คงคลัง Steam</p>

          <p class="name5">การตั้งค่าอื่น ๆ</p>
          <p class="name4">ผูกเบอร์มือถือ</p>
          <p class="name4">สถานะร้าน</p>

        </div>

      </div>

      </div>
        
    <footer class="site-footer">
        <div class="f1">
          <h3>JARJOSUDLOR</h3>
          <p>Powered by Steam. Not affiliated with Valve Corp.</p>
          <p>
            &copy; 2023 JARJOSUDLOR | 
            <a>นโยบายความเป็นส่วนตัว</a> | 
            <a>ข้อกำหนดการให้บริการ</a> | 
            <a>นโยบายคุกกี้</a>
          </p>
        </div>
        <div class="f2">
          <div class="f21">
  
            <h3>Introduction</h3>
            <p>Privacy Statement</p>
            <p>Terms of Service</p>
            <p>Cookie policy</p>
          </div>
          <div class="f22">
            <h3>Payment methods</h3>
            <p>prompt pay</p>
            <p>true money</p>
          </div>
        </div>
    </footer>
</template>

<style>
/* Import font from Google Fonts */
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
  background-color: #0e0e0e;
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

.white{
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
}

.search-input {
  padding: 4px 19px;
  border: none;
  border-radius: 50px;
  width: 400px;
  box-sizing: border-box;
  border: #333 2px solid;
}

/* สไตล์สำหรับไอคอนรูปตระกูลสินค้า */
.serch-button{
  margin-left: -4.6rem;
  margin-bottom: 2px;
  margin-top: 1.6px;
  width: 74px;
  height: 30px;
  border-radius: 20px;
  font-size: 14px;
  background-color: darkred;
  color: #fff;
}
.serch-button:hover{
  background-color: red;
  color: #fff;
}

/* styles.css */

/* สไตล์สำหรับลิงค์ที่ไม่มีเส้นใต้ */
a {
  text-decoration: none;
}


.table{
  display: flexbox;
  margin-left: 2%;
}
/* รูปแบบสำหรับช่องด้านล่างของ header */
.bottom-bar {
  width: 98%;
  height: 76px;
  background: #D9D9D9;
  display: flex; /* เปิดใช้ Flexbox */
  align-items: center; /* จัดตำแหน่งตรงกลางแนวตั้ง */
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
  height: 50px;
  background: #fff;
  margin: 0 10px; /* ขยับเส้นคั่นไปทางขวาและซ้าย 10px (หรือค่าที่คุณต้องการ) */
}

.sales-history {
  color: #000000; /* เปลี่ยนสีข้อความเป็นสีดำ */
  font-size: 14px;
  margin-left: 10px; /* ขยับข้อความไปทางขวา 10px (หรือค่าที่คุณต้องการ) */
}

.custom-div {
  padding: 20px;
  width: 98%;
  height: 1000px;
  border-radius: 10px;
  background: #D9D9D9;
  margin-top: 10px; /* ขยับลงมาด้านล่างอีก 10px */
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
.hii{
    margin-top: -58rem;
}

.lin{
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  cursor: context-menu;
}
.type{
  width: 9rem;
  height: 1.9rem;
  border: white 1px solid;
  border-radius: 30px;
  color: #000;
  background-color: silver;
  font-weight: bold;
  text-align: center;
  align-items: center;
  font-size: 14px;
}
.line {
  width: 95%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  height: 1px;
  background-color: gray; /* สีของเส้น */
}
.text{
  display: flex;
  margin-left: .4rem;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;

}
.tex{
  display: flex;
  justify-content: space-between;
  width: 25%;
}
.check{
  display: flex;
}
.check input{
  margin-right: 20px;
  width: 25px;
  height: 25px;
}
.red{
  color: red;
}
.blue{
  color: blue;
}
.linee{
  margin-top: 5px;
  width: 100%;
  height: 1px;
  background-color: red; /* สีของเส้น */
  box-shadow: 0 .1px .1px .1px rgb(255, 119, 119) ;
  background: linear-gradient(to right, #ff0000, transparent);
}


/* กรอปรูปโปรไฟล์ */
.profile {
  width: 200px; /* ปรับความกว้างตามที่คุณต้องการ */
  height: 180px; /* ปรับความสูงตามที่คุณต้องการ */
  /*stransform: translate(50px, 30px); ปรับตำแหน่งตามที่คุณต้องการ */
  display: flex;
  border-radius: 100%;
  background-color: white;
  align-items: center;
  justify-content: center;
  overflow: hidden; /*ซ่อนภาพที่ใหญ่เกินกรอบรูป*/
  margin-right: 50px;
}
/* รูปโปรไฟล์ */
.profile img{
  text-align: center;
  width: 90%;
  height: 90%;
}
/* ข้อความล่างรูป */
.protex{
  margin-top: 20px;
  
}


/* กล่องใหญ่ครอบรูปโปรไฟล์กับข้อมูลโปรไฟล์ */
.table{
  margin-top: 90px;
  display: flex;
  padding-left: 10px;
  justify-content: center;
}
/* ข้อมูลโปรไฟล์ */
.proinfo{
  width: 55rem;
  height: 50rem;
  border-radius: 20px;
  background: #272C33;
  cursor: context-menu;
}
/* ข้อความด้านบน */
.upper{
  color: #333;
  margin-top: 20px;
  margin-left: 40px;
  display: flex;
  align-items: center;
}
/* กล่องรวมระบุยอดเงิน */
.mo3ney{
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* กล่องย่อยระบุยอดเงิน */
.money{
  padding: 18px;
  margin: 0 10px;
  width: 14rem;
  height: 7.5rem;
  background-color: #B1ADAD;
  border-radius: 20px;
}
/* เติมเงิน */
.addmoney{
  background-color: #1D2126;
  padding: 8px;
  margin: 0 auto;
  margin-top: 30px;
  width: 800px;
  height: 430px;
  border-radius: 20px;
}

.addmoney2{
  background-color: #1D2126;
  padding: 8px;
  margin: 0 auto;
  margin-top: 30px;
  width: 800px;
  height: 150px;
  border-radius: 20px;
}
/* ช้อความด้านบนหน้าเติมเงิน */
.upperm{
  color: #333;
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  align-items: center;
}
.upperm h3{
  margin-right: 30px;
  cursor: pointer;
}
a{
  color: #000;
}
/* เติมเงินย่อย */
.add{
  margin-left: 20px;
  display: flex;

  margin-bottom: 50px;
}
.add h3{
  margin-top: 10px;
}
.add button{
  width: 100px;
  height: 30px;
  margin-right: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
}
.add button:hover{
  background-color: lightblue;
}
/* ปุ่ม */
.but{
  display: flex;
  flex-wrap: wrap;
}
.but img{
  margin-left: -50px;
  width: 150px;
  height: 90px;
  cursor: pointer;
}

.name{
  margin-left: 20px;
  font-size: 24px;

}

.name2{
  margin-left: 20px;
  margin-top: 15px;

}

.name3{
  margin-left: 20px;
  margin-top: 25px;
}

.name4{
  margin-left: 20px;
  margin-top: 10px;
}

.name5{
  margin-left: 20px;
  margin-top: 50px;
  font-size: 24px;

}

.name6{
  margin-left: 20px;
  margin-top: 10px;
  font-size: 24px;

}
</style>