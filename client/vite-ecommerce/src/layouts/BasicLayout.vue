<template>
  <div class="basic-layout">
    <Navbar />

    <v-container fluid class="ui container">
      <slot />
    </v-container>

    <Cart />
  </div>
</template>

<script setup>
  import Navbar from '../components/Navbar.vue'
  import Cart from '../components/Cart/Cart.vue'
</script>

<style lang="css" scoped>
</style>
