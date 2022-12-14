<template>
  <BasicLayout>
    <h1>Cart</h1>

    <table class="ui celled table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.productId">
          <td v-text="product.name" />
          <td v-text="product.quantity" />
          <td>{{ product.price }} €</td>
          <td class="text-center">
            <v-icon color="#ff3f80" icon="mdi-close-thick" @click="deleteAllProductCart(product.productId)" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Total:</td>
          <td colspan="2">{{ getTotalPrice() }} €</td>
        </tr>
      </tbody>
    </table>

    <v-btn block color="info" v-if="products" @click="createOrder">
      Generate Purchase
    </v-btn>

    <h3 v-else>
      There is no products in the cart
    </h3>

  </BasicLayout>
</template>

<script lang="ts" setup>
  import { ref, watchEffect } from 'vue'
  import { useRouter } from 'vue-router'

  import jwtDecode from 'jwt-decode'
  import BasicLayout from '@/layouts/BasicLayout.vue'
  import { getTokenApi, createOrderApi, getProductsCartApi, deleteAllProductCartApi, deleteCartApi } from '@/apis/strapi'
  import { type Products } from '@/interfaces/products'

  const router = useRouter()

  let products = ref<Products>(null)
  let reloadCart = ref(false)

  watchEffect(async () => {
    reloadCart.value

    const response = await getProductsCartApi()
    products.value = response
  })

  const getTotalPrice = (): number => {
    let totalTemp = 0

    if (!products.value) return
    products.value.forEach((product) => {
      totalTemp += product.price * product.quantity
    })

    return totalTemp.toFixed(2)
  }

  const createOrder = async () => {
    const token = getTokenApi()
    const { id } = jwtDecode(token)

    const data = { 
      user: id,
      totalPayment: getTotalPrice(),
      data: products.value
    }

    try {
      const response = await createOrderApi(data)
      deleteCartApi()
      router.push({ name: 'Orders' })
    } catch (error) {
      console.log('error', error)
    }
  }

  const deleteAllProductCart = (productId) => {
    deleteAllProductCartApi(productId)
    reloadCart.value = !reloadCart.value
  }

</script>