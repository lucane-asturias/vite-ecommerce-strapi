<template>
  <BasicLayout>
    <div class="ui grid">
      <div
        class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in products"
        :key="product.id"
      >
        <Product :product="product" />
      </div>
    </div>
  </BasicLayout>
</template>

<script setup>
  import { onMounted, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'

  import Product from '../components/Product.vue'
  import BasicLayout from '../layouts/BasicLayout.vue'

  import { getProductsByCategory } from '@/apis/strapi'

  const route = useRoute()

  let products = ref()

  onMounted(() => {
    getProducts(route.params.category)
  })

  const getProducts = async (category) => {
    const response = await getProductsByCategory(category)
    products.value = response
  }

  watch(route, (to, from) => {
    // get new product when route changes
    getProducts(to.params.category)
  })

</script>

<style lang="css" scoped>
</style>
