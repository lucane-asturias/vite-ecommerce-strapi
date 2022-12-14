<template>
  <header class="cart-header">
    <p>Cart</p>
    <v-icon icon="mdi-close-thick" @click="closeCart" />
  </header>
</template>

<script lang="ts" setup>
  defineProps<{ closeCart: Function }>()
</script>

<style lang="scss" scoped>
.cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  border-bottom: 1px solid #000;
  padding: 10px 20px;

  p,
  i {
    margin: 0;
  }

  i:hover {
    cursor: pointer;
  }
}
</style>