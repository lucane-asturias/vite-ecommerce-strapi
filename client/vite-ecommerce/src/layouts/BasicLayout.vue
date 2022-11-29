<template>
  <div class="basic-layout">
    <Navbar />

    <v-container fluid class="ui container">
      <slot />
    </v-container>

  </div>
</template>

<script setup>
  import Navbar from '../components/Navbar.vue'
</script>

<style lang="css" scoped>
</style>
