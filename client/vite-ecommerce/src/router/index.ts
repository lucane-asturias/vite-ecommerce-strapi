import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

// const requireAuth = (to, from, next) => {
//   const userAuth = auth.currentUser
//   if (!userAuth) next({ name: 'Welcome' })
//   else next()
// }

// const requireNoAuth = (to, from, next) => {
//   const userAuth = auth.currentUser
//   if (userAuth) next({ name: 'Chatroom' })
//   else next()
// }

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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