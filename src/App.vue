<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import Flickity from 'flickity'

const flickity = new Flickity('.carousel', {
  wrapAround: true,
  autoPlay: true,
  imagesLoaded: true
});

flickity.on('change', function(index) {
  // ซ่อนรูปภาพทั้งหมด
  const images = document.querySelectorAll('.carousel-img');
  images.forEach(image => {
    image.style.display = 'none';
  });

  // แสดงรูปภาพที่เกี่ยวข้องกับหน้าลูกศรปัจจุบัน
  images[index].style.display = 'block';
});
</script>

<template>
  <header class="custom-header">

    <div class="header-content">

    <div class="logo"><a href="/">JARSKINS</a></div>  
    <div class="into">
      <div class="wallet">
        <div class="input-container">
          <span class="currency-icon" style="color: rgb(17, 197, 53);">B</span> 
              <input class="wallet-input" type="text" value=" 0.00" readonly style="color: white;"/>
              <button class="add-money-button">+</button>
            </div>
      </div> 
            <div class="product-icon">
              <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/buyorder">Buy</RouterLink>
              </nav> 
            </div> 
      </div>
  </div>
  </header>
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
  <RouterView />
</template>