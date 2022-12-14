<template>
  <BasicLayout>
    <h1 v-if="!orders">You do not have any orders</h1>
    <template v-else>
      <h1>My Orders</h1>
      <div class="order" v-for="order in orders" :key="order.productId">
        <div class="header">
          <span class="date">{{ formatDate(order.createdAt) }}</span>
          <p>ID: {{ order.productId }}</p>
          <p>Total: {{ order.totalPayment }} €</p>
        </div>
        <div class="products">
          <div class="product">
            <div>
              <img
                :src="'http://localhost:1337' + order.url"
                :alt="order.name"
                class="ui image"
              />
              <p class="ml-3">{{ order.name }}</p>
            </div>
            <div>{{ order.quantity }} x {{ order.price }} €</div>
          </div>
        </div>
      </div>
    </template>
  </BasicLayout>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import jwtDecode from 'jwt-decode'
  import moment from 'moment'
  import 'moment/locale/pt-br'
  import BasicLayout from '@/layouts/BasicLayout.vue'
  import { getOrders, getTokenApi } from '@/apis/strapi'

  let orders = ref(null)

  onMounted(async () => {
    const token = getTokenApi()
    const { id } = jwtDecode(token)
    const { data } = await getOrders(id)

    const fetchedOrders = []

    for (let id of Object.keys(data)) {
      const totalPayment = data[id].attributes.totalPayment
      for (let orders of data[id].attributes.data) {
        const { ...orderDetail } = orders
        fetchedOrders.push({ ...orderDetail, totalPayment })
      }
    }

    orders.value = fetchedOrders
  })

  const formatDate = (date) => {
    return moment(date).format("L [de] LT")
  }
</script>

<style lang="scss" scoped>
.order {
  border: 1px solid #000;
  margin-bottom: 20px;
  margin-top: 40px;

  .header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    p {
      margin: 0;
    }

    span {
      position: absolute;
      top: -20px;
      left: 0;
      font-size: 12px;
    }
  }

  .products {
    border-top: 1px solid #000;

    .product {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 30px;

      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    .ui.image {
      width: 50px;
    }
  }
}
</style>