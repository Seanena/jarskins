<template>
    <div id="app">    <header class="custom-header">
        <!-- ส่วนเพิ่มเติมเพื่อจัดให้ช่องค้นหาแบบวงลีอยู่กึ่งกลาง -->
        <div class="header-content">
            <div class="logo"><a href="/">JARJOSUDLOR</a></div>  
            <div class="into">
              <div class="wallet">
                <div class="input-container">
                  <span class="currency-icon" style="color: rgb(17, 197, 53);">B</span> 
                      <input class="wallet-input" type="text" value=" 0.00" readonly style="color: white;"/>
                      <button class="add-money-button">+</button>
                    </div>
              </div> 
                    <div class="product-icon">
                        <a href="/src/item/item_knife.html">ตลาด</a>
                        <a href="/src/headder/inventory.html">คลังสินค้า</a>
                        <a href="/src/headder/buy_order.html">การซื้อ</a>
                        <a href="/src/headder/sell_order.html">การขาย</a>

                    </div> 
                    <div class="navbar">
                        <div class="dropdown">
                            <img src="src\assets\pic\playerLeft.png" alt=""><!--ใส่รูปตรงนี้ครับ-->
                            <i class="fa fa-caret-down"></i>
                            <div class="dropdown-content">
                                <a href="/src/headder/profile.html">
                                    <img src="/src/assets/pic/setting.png" alt="">
                                    ข้อมูลส่วนตัว
                                </a>    
                                
                                <a href="#">
                                    <img src="/src/assets/pic/Exit.png" alt="">
                                    ออกจากระบบ
                                </a>                                              
                        </div>
                    </div> 
                </div>
              </div>

    </div>
    </header>
        
        <!-- เนื้อหาหน้าแอปของคุณ -->
        <div class="table">
            <div class="bottom-bar">
                <a href="#" class="order-history">ประวัติการสั่งซื้อ</a>
                <div class="separator"></div> 
                <a href="/src/headder/sell_order.html" class="sales-history">บันทึกการขาย</a>
                <div class="search-box">
                    <input class="search-input" type="text" placeholder="กรอกชื่อไอเทม"/>
                    <button class="serch-button" >ค้นหา</button>
                </div>
            </div>
        
            <div class="custom-div">
                <div class="column">
                <div class="info-item">
                    <p class="info-label">ข้อมูลสินค้า</p>
                </div>
                <div class="info-item">
                    <p class="info-label">ข้อมูลสกิล</p>
                </div>
                <div class="info-item">
                    <p class="info-label">ราคาซื้อ</p>
                </div>
                <div class="info-item">
                    <p class="info-label">วิธีการชำระเงิน</p>
                </div>
                <div class="info-item">
                    <p class="info-label">ราคาซื้อ</p>
                </div>        
                </div>
                <div class="row">
                    <img src="playerRight.png" alt="">
                    <p>M4A4 | Eye of Horus (มีรอยถลอกเล็กน้อย) </p>
                    <p class="red">฿ 47122.28</p>
                    <h3>Promptpay</h3>
                    <button>รอต่อรอบเทรด offer</button>

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