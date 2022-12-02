<template>
  <div class="ui card product">
    <div class="image">
      <img :src="'http://localhost:1337' + product.url" :alt="product.name" />
    </div>
    <div class="content">
      <div class="header">{{ product.name }}</div>
      <div class="description">{{ product.price }} €</div>
    </div>
    <div class="ui button primary" @click="addProductCartApi(product.productId)">
      Comprar
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { addProductCartApi } from "@/apis/strapi";

  defineProps<{ product: object }>()
  
  const addProductCart = (idProduct) => addProductCartApi(idProduct)
</script>

<style lang="scss" scoped>
.product {
  &:hover {
    .ui.button {
      min-height: 36px;
    }
  }

  .ui.button {
    max-height: 0;
    min-height: 0;
    overflow: hidden;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: min-height 0.6s ease;
  }
}
</style>