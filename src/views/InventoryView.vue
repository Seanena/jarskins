<script setup>
import Inventory from '../components/Inventory.vue'
</script>

<template>
  <main>
    <Inventory />
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
