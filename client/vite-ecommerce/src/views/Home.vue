<template>
  <BasicLayout>
    <h1>Last Products</h1>
    <div class="ui grid">
      <div class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in products"
        :key="product.id"
      >
        <Product :product="product" />
      </div>
    </div>
  </BasicLayout>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import BasicLayout from '../layouts/BasicLayout.vue'
  import Product from '../components/Product.vue'
  import { getProducts } from '@/apis/strapi'

  let products = ref(null)

  onMounted(async () => {
    const response = await getProducts(20)
    const data = response.data

    const productsDetail = []

    for (let id of Object.keys(data)) {
      const productId = data[id].id
      const { name, price } = data[id].attributes
      const { url } = data[id].attributes.image.data.attributes
      productsDetail.push({productId, name, price, url})
    }

    console.log('productsDetail', productsDetail)

    products.value = productsDetail
  })

</script>