<script setup>
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
  <div class="carousel" data-flickity='{ "wrapAround": true, "autoPlay": true, "imagesLoaded": true }'>
  <div class="carousel-cell">
    <img class="w3-image carousel-img" src="/src/assets/pic/carousel1.webp">
  </div>
  <div class="carousel-cell">
    <img class="w3-image carousel-img" src="/src/assets/pic/carousel2.webp">
  </div>
  <div class="carousel-cell">
    <img class="w3-image carousel-img" src="/src/assets/pic/carousel3.webp">
  </div>
</div>


  <div class="nav">
    <figure> 
      <a href="">
        <img src="src\assets\pic\arrowup.png" alt="" width="25px" height="25px">
      </a>
      <img src="src\assets\pic\clipart1589423.png" alt="" width="25px" height="25px">
    </figure>
  </div>


  
  <div class="contai1">
    <p>ค้นหาบ่อย : </p>
    <div class="alltag">
      <div class="tags">
        <button>ค้นหาบ่อย</button>
      </div>
      <div class="tags">
        <button>ค้นหาบ่อย</button>
      </div>
      <div class="tags">
        <button>ค้นหาบ่อย</button>
      </div>
      <div class="tags">
        <button>ค้นหาบ่อย</button>
      </div>
    </div>
  </div>

  <div class="contai2">
    <figure>
      <a href="#">
         <img src="/src/assets/pic/Rectangle11.png" alt="">
      </a>
      <a href="#">
        <img src="/src/assets/pic/Rectangle12.png" alt="">
      </a>
      <a href="#">
        <img src="/src/assets/pic/Rectangle13.png" alt="">
      </a>
      <a href="#">
        <img src="/src/assets/pic/Rectangle14.png" alt="">
      </a>
    </figure>
    <figure>
      <a href="#">
        <img src="/src/assets/pic/Rectangle15.png" alt="">
      </a>
      <a href="#">
        <img src="/src/assets/pic/Rectangle16.png" alt="">
      </a>
      <a href="#">
        <img src="/src/assets/pic/Rectangle17.png" alt="">
      </a>
      <a href="#">
        <img src="/src/assets/pic/Rectangle18.png" alt="">
      </a>
    </figure>
  </div>

  <div class="contai3">
    <h2>เลือกหมวดหมู่สินค้า</h2>
    <div class="bigfig">
      <figure>
        <div class="ball">
          <a href="/src/item/item_knife.html">
            <img src="/src/assets/pic/Rectangle19.png">
          </a>
        </div>
        <div class="ball">
          <a href="/src/item/item_pistol.html">
            <img src="/src/assets/pic/Rectangle20.png">
          </a>
        </div>
        <div class="ball">
          <a href="/src/item/item_submach.html">
            <img src="/src/assets/pic/Rectangle21.png">
          </a> 
        </div>
        <div class="ball">
          <a href="/src/item/item_rifle.html">
            <img src="/src/assets/pic/Rectangle22.png">
          </a> 
        </div>
        <div class="ball">
          <a href="/src/item/item_heavymach.html">
            <img src="/src/assets/pic/Rectangle23.png">
          </a> 
        </div>
      
    </figure>
  
    </div>
  </div>

  <div class="contai4">
    <h2>CS2GO : จุดหมายปลายทางชั้นนำของคุณสำหรับตลาดสกินที่ดีที่สุด</h2>
    <div class="bigmarket">
      <div class="market">
        <div class="marketflex">
          <div class="mtex">
            <h3>I'm the buyer</h3>
            <b>รับมากขึ้นในราคาที่ถูกลง</b>
          <p>เพลิดเพลินกับราคาที่ต่ำกว่า steam Marketplace ถึง 100%</p>
        </div>
        <img src="src\assets\pic\trolley-cart.png" alt="">
      </div>
      <a href="src/item/item_knife.html">
          <button>ไปตลาด</button>
        </a>
      </div>
      <div class="market">
        <div class="marketflex">
          <div class="mtex">
            <h3>I'm the seller</h3>
            <b>2% commission</b>
            <p>Enjoy the Lowest Commission in the Market</p>
          </div>
          <img src="src\assets\pic\shop.png" alt="">
        </div>
        <a href="src/item/item_knife.html">
          <button>รายการ</button>
        </a>
      </div>
    </div>
  </div>
</template>
