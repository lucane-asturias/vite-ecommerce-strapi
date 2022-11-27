<template>
  <div class="basic-layout">
    <Menu />
    <v-btn color="primary">aeio</v-btn>

    <v-container fluid class="ui container">
      <slot />
    </v-container>
  </div>
</template>

<script setup>
  import Menu from '../components/Menu.vue'
</script>

<style lang="css" scoped>
</style>
