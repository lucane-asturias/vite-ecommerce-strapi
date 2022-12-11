<template>
  <main class="cart-body py-5 px-3 overflow-y">
    <div class="product" v-for="product in products" :key="product.productId">
      <v-img
        width="100"
        class="mb-2"
        :src="'http://localhost:1337' + product.url"
        :alt="product.name"
      />
      <article class="info w-100">
        <p class="mx-2">{{ product.name }}</p>
        <div class="price">
          <p class="mx-2 my-1">{{ product.price }} €</p>

          <div class="quantity my-2">
            <v-btn
              class="px-3"
              color="info"
              size="x-small"
              @click="increaseProductCart(product.productId)"
            >
              +
            </v-btn>
            <p class="mx-3">{{ product.quantity }}</p>
            <v-btn
              class="py-1 px-3"
              color="info"
              size="x-small"
              @click="decreaseProductCart(product.productId)"
            >
              -
            </v-btn>
          </div>
        </div>
      </article>
    </div>
  </main>
</template>

<script lang="ts" setup>
  import { addProductCartApi, deleteProductCartApi } from '@/apis/strapi'
  import { type Products } from '@/interfaces/products'

  interface Props { products: Products, reloadCartFn: Function }
  const props = defineProps<Props>()
  
  const increaseProductCart = (productId) => {
    addProductCartApi(productId)
    props.reloadCartFn()
  }

  const decreaseProductCart = (productId) => {
    deleteProductCartApi(productId)
    props.reloadCartFn()
  }
</script>

<style lang="scss" scoped>
.cart-body {
  padding: 20px 10px;
  overflow-y: scroll;
  scrollbar-width: none;
  height: calc(100vh - 50px - 90px);
  &::-webkit-scrollbar {
    display: none;
  }

  .product {
    display: flex;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .price {
      display: flex;
      justify-content: space-between;
    }

    .quantity {
      display: flex;
      align-items: center;

      .v-btn {
        margin-top: -16px;
      }
    }
  }
}
</style>