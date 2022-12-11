<template>
  <v-card class="product" elevation="5">
    <div class="image">
      <v-img gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.01)"
        :aspect-ratio="1" height="250" 
        :src="'http://localhost:1337' + product.url" :alt="product.name" 
      />
    </div>
    <v-card-text :class="xs ? 'text-caption' : 'text-body-1 font-weight-regular'" v-text="product.name" />
    <v-card-subtitle class="mb-2 text-subtitle-1">{{ product.price }} €</v-card-subtitle>
    <v-btn block color="blue darken-5" class="btn font-weight-regular" 
      @click="addProductCartApi(product.productId)">
      Comprar
    </v-btn>
  </v-card>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useDisplay } from 'vuetify'
  import { addProductCartApi } from "@/apis/strapi";

  defineProps<{ product: object }>()
  
  const { xs } = useDisplay()
  
  const addProductCart = (idProduct) => addProductCartApi(idProduct)
</script>

<style lang="scss" scoped>
.product {
  &:hover {
    .btn {
      min-height: 34px;
    }
  }

  .btn {
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