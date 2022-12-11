<template>
  <footer class="cart-footer">
    <p>Total: {{ total }} €</p>

    <router-link to="/cart">
      <button class="ui button primary fluid btn-buy" @click="closeCart">
        Comprar
      </button>
    </router-link>
  </footer>
</template>

<script lang="ts" setup>
  import { ref, watchEffect } from "vue"
  import { type Products } from '@/interfaces/products'

  interface Props { products: Products, closeCart: Function }
  const props = defineProps<Props>()

  let total = ref(0);

  watchEffect(() => {
    props.products

    let totalTemp = 0;
    props.products.forEach((product) => {
      totalTemp += product.price * product.quantity;
    })
    total.value = totalTemp.toFixed(2);
  })

</script>

<style lang="scss" scoped>
.cart-footer {
  padding: 10px;
}
</style>