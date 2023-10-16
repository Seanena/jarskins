<script setup>
import Profile from '../components/Profile.vue'
</script>

<template>
  <main>
    <Profile />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
