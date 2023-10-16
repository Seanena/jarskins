<script setup>
import { RouterLink, RouterView } from 'vue-router'

const toggleDarkTheme = () => {
  const icon = document.getElementById("icon-theme"); 

  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = 'https://cdn-icons-png.flaticon.com/512/3050/3050031.png'; 
  } else {
    icon.src = 'https://cdn-icons-png.flaticon.com/512/4445/4445942.png'; 
  }
};

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
                <RouterLink to="/market">Market</RouterLink>
                <RouterLink to="/inventory">Inventory</RouterLink>
                <RouterLink to="/buyorder">Cart</RouterLink>
                <RouterLink to="/profile_edit">Profile</RouterLink>
              </nav> 
            </div> 
      </div>
  </div>
  <img @click="toggleDarkTheme()" src="https://cdn-icons-png.flaticon.com/512/4445/4445942.png" id="icon-theme" style="margin-right: 30px;">
  </header>
  <RouterView />
</template>

<style>
#icon-theme{
  margin: auto 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: 1s;

}
#icon-theme:hover{
  animation-name: rotate;
  -webkit-animation: rotate 3s normal linear infinite;
  animation: rotate 3s normal linear infinite;
  scale: 1.5;
}

:root{
   --primary-color: #f4fdff;
  --secondary-color: #212121; 
}

.dark-theme{
 --primary-color: #3d3d3d;
 --secondary-color: #ffffff;
}

</style>