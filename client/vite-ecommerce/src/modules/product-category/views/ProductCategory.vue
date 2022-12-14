<template>
  <BasicLayout>
    <v-row>

      <v-col cols="5" md="3" lg="3"
        v-for="product in products" :key="product.productId">
          <Product :product="product" />
      </v-col>

    </v-row>
  </BasicLayout>
</template>

<script setup>
  import { onMounted, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'

  import Product from '@/components/Product.vue'
  import BasicLayout from '@/layouts/BasicLayout.vue'

  import { getProductsByCategory } from '@/apis/strapi'

  const route = useRoute()

  let products = ref()

  onMounted(() => {
    getProducts(route.params.category)
  })

  const getProducts = async (category) => {
    const { data } = await getProductsByCategory(category)

    const categoryDetail = []

    for (let id of Object.keys(data)) {
      const productId = data[id].id
      const { name, price } = data[id].attributes
      const { url } = data[id].attributes.image.data.attributes
      categoryDetail.push({productId, name, price, url})
    }
    products.value = categoryDetail
  }

  watch(route, (to, from) => {
    // get new product when route changes
    getProducts(to.params.category)
  })

</script>

<style lang="css" scoped>
</style>
