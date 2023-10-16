<template>
        <!-- เนื้อหาหน้าแอปของคุณ -->
        <div class="table">

            <div class="bottom-bar">
                <a href="/src/item/item_knife.html" class="knife">มีด</a>
            <div class="separator"></div> 
                <a href="/src/item/item_pistol.html" class="pistol" style="color: white;">ปืนพก</a>
            <div class="separator"></div> 
                <a href="/src/item/item_submach.html" class="submach" style="color: white;">ปืนกลมือ</a>
            <div class="separator"></div> 
                <a href="/src/item/item_rifle.html" class="rifle" style="color: white;">ปืนไรเฟิล</a>
            <div class="separator"></div> 
                <a href="/src/item/item_heavymach.html" class="heavymach" style="color: white;">อาวุธหนัก</a>
            <div class="separator"></div> 
                <a href="/src/item/item_glove.html" class="glove" style="color: white;">ถุงมือ</a>
            <div class="separator"></div> 
                <a href="/src/item/item_sticker.html" class="sticker" style="color: white;">สติ๊กเกอร์</a>

            <div class="search-box">
                <input class="search-input" type="text" placeholder="กรอกชื่อไอเทม"/>
                <button class="serch-button" >ค้นหา</button>
            </div>
            </div>
            <div class="custom-div">
                <div class="lin">
                    <div class="type">การขาย</div>
                    <div class="itempic">
                        <img src="../assets/pic/playerLeft.png" alt="">
                        <img src="../assets/pic/playerLeft.png" alt="">
                        <img src="../assets/pic/playerLeft.png" alt="">
                        <img src="../assets/pic/playerLeft.png" alt="">
                        <img src="../assets/pic/playerLeft.png" alt="">
                    </div>
                </div>
                <div class="lline"></div>
                <div class="itembox">

                    <div class="item">
                        <div class="itemimg">
                            <img src="../assets/pic/playerLeft.png" alt="">
                        </div>
                        <div class="line"></div>
                        <h1>฿81.42</h1>
                        <p class="red">MAC-10</p>
                        <br>
                        <h3>Sakkaku</h3>
                        <div class="linee"></div>
                    </div>
                    <div class="item">
                        <div class="itemimg">
                            <img src="../assets/pic/playerLeft.png" alt="">
                        </div>
                        <div class="line"></div>
                        <h1>฿81.42</h1>
                        <p class="red">MAC-10</p>
                        <br>
                        <h3>Sakkaku</h3>
                        <div class="linee"></div>
                    </div>
                    <div class="item">
                        <div class="itemimg">
                            <img src="../assets/pic/playerLeft.png" alt="">
                        </div>
                        <div class="line"></div>
                        <h1>฿81.42</h1>
                        <p class="red">MAC-10</p>
                        <br>
                        <h3>Sakkaku</h3>
                        <div class="linee"></div>
                    </div>
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
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300&display=swap');

/* Reset default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'IBM Plex Sans Thai', sans-serif;
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



.table{
    display: flexbox;
    justify-content: center;
    margin-left: 2%;
}
  /* รูปแบบสำหรับช่องด้านล่างของ header */
.bottom-bar {
    width: 98%;
    height: 76px;
    flex-shrink: 0;
    background: #272C33;
    display: flex; /* เปิดใช้ Flexbox */
    align-items: center; /* จัดตำแหน่งตรงกลางแนวตั้ง */
    justify-content: center;
    margin-top: 10px; /* ขยับลงมาด้านล่างอีก 10px */
    padding: 10px;
}
  
.bottom-bar a {
    font-weight: bold;
    font-size: 17px;
    text-decoration: none;
    color: #000;
    margin-left: 25px; /* ขยับข้อความไปทางขวา 10px (หรือค่าที่คุณต้องการ) */
}
.bottom-bar a:hover{
    color: red;
}
  /* สไตล์สำหรับเส้นคั่น */
.separator {
    width: 1px;
    height: 55px;
    background: #D9D9D9;
    margin-left: 20px; /* ขยับเส้นคั่นไปทางขวาและซ้าย 10px (หรือค่าที่คุณต้องการ) */
}

  
.custom-div {
  padding: 20px;
  width: 98%;
  height: 100%;
  border-radius: 10px;
  background: #272C33;
  margin-top: 10px; /* ขยับลงมาด้านล่างอีก 10px */
}
.custom-div h1{
    text-align: center;
    margin: 0 auto;
    font-size: 190px;
    color: red;
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
  width: 20rem;
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


.lin{
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  cursor: context-menu;
}
.lin img{
  width: 70px;
  height: 80px;
}
.itempic{
  margin-left: 2rem;
  display: flex;
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
    width: 100%;
    height: 1px;
    background-color: #333; /* สีของเส้น */
}
.lline {
  margin-top: 1rem;
  width: 100%;
  height: 1px;
  background-color: gray; /* สีของเส้น */
}

.red{
  color: red;
}

.itembox{
  width: 100%;
  padding: 3rem 7rem;
  display: flex;
  flex-wrap: wrap
}
.item{
  margin: 10px;
  width: 250px;
  height: 330px;
  background-color: silver;
  justify-content: center;
  padding: 20px;
}
.item:hover{
  background-color: #D9D9D9;
  border: white 1px solid;
  cursor: pointer;
}
.item .line{
  box-shadow: 0 3px 5px 2px gray ;
}
.itemimg{
  text-align: center;
}
.item img{
  width: 90px;
  height: 120px;
}
.item h1{
  margin-top: 13px;
  font-weight: bold;
  font-size: 30px;
}
.item h1,h3{
  color: #ffffff;
}
.item p{
  font-size: 14px;
}
.linee{
  margin-top: 5px;
  width: 100%;
  height: 1px;
  background-color: red; /* สีของเส้น */
  box-shadow: 0 .1px .1px .1px rgb(255, 119, 119) ;
  background: linear-gradient(to right, #ff0000, transparent);
}
</style>