<template>
  <BasicLayout>
    <h1>Last Products</h1>
    <v-row>

      <v-col cols="12" sm="4" md="3" lg="3"
        v-for="product in products" :key="product.productId">
          <Product :product="product" />
      </v-col>

    </v-row>
  </BasicLayout>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import BasicLayout from '../layouts/BasicLayout.vue'
  import Product from '../components/Product.vue'
  import { getProducts } from '@/apis/strapi'

  let products = ref(null)

  onMounted(async () => {
    const { data } = await getProducts(20)

    const productsDetail = []

    for (let id of Object.keys(data)) {
      const productId = data[id].id
      const { name, price } = data[id].attributes
      const { url } = data[id].attributes.image.data.attributes
      productsDetail.push({productId, name, price, url})
    }

    products.value = productsDetail
  })

</script>