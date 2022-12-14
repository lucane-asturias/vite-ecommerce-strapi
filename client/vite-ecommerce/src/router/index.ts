import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import AuthView from '@/modules//auth/views/AuthView.vue'
import ProductCategory from '@/modules/product-category/views/ProductCategory.vue'
import CartView from '@/modules/cart/views/CartView.vue'
import Orders from '@/views/Orders.vue'

import { getTokenApi } from '@/apis/strapi'

const requireAuth = (to, from, next) => {
  const token = getTokenApi()
  if (!token) next({ name: 'AuthView' })
  else next()
}

const requireNoAuth = (to, from, next) => {
  const token = getTokenApi()
  if (token) next({ name: 'Home' })
  else next()
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthView,
    beforeEnter: requireNoAuth
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView,
    beforeEnter: requireAuth
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
  },
  {
    // dynamic routing
    path: '/:category',
    component: ProductCategory,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // scroll to top when navigating to a new route
    return { top: 0 }
  }
})

export default router