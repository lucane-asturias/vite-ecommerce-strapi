<template>
  <div class="cart-dimmer" :class="{ open: showCart }" @click="closeCart" />
  <div class="cart" :class="{ open: showCart }">

    <section>
      <CartHeader :closeCart="closeCart" />
      <CartBody v-if="products" :products="products" :reloadCartFn="reloadCartFn" />
    </section>

    <section>
      <CartFooter v-if="products" :products="products" :closeCart="closeCart" />
    </section>
    
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed, watchEffect } from 'vue'
  import { type Products } from '@/interfaces/products'

  import CartHeader from '../components/CartHeader.vue'
  import CartBody from '../components/CartBody.vue'
  import CartFooter from '../components/CartFooter.vue'

  import { useCartStore } from '../store/cartStore'
  import { getProductsCartApi } from '@/apis/strapi'

  let products = ref<Products>()
  let reloadCart = ref(false)
  
  const cartStore = useCartStore()
  const showCart = computed(() => cartStore.showCart)

  const getProductsCart = async () => {
    const response = await getProductsCartApi()
    console.log('response', response)
    products.value = response
  }

  const reloadCartFn = () => reloadCart.value = !reloadCart.value
  const closeCart = () => cartStore.setShowCart(false)

  watchEffect(() => {
    showCart.value
    reloadCart.value
    getProductsCart()
  })

</script>

<style lang="scss" scoped>
.cart-dimmer {
  opacity: 0;
  transition: opacity 0.5 ease;

  &.open {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
  }
}

.cart {
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0px 0px 26px 5px rgba(0, 0, 0, .75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.9s ease;
  transform: translateX(150%);

  &.open {
    transform: translateX(0);
  }
}
</style>