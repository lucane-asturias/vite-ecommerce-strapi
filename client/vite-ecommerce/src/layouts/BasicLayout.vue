<template>
  <div class="basic-layout">
    <Navbar />

    <v-container fluid class="ui container">
      <slot />
    </v-container>

    <CartDrawer />
  </div>
</template>

<script setup>
  import Navbar from '../components/Navbar.vue'
  import CartDrawer from '@/modules/cart/views/CartDrawer.vue'
</script>

<style lang="css" scoped>
</style>
