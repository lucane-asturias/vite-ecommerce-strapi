import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    showCart: false
  }),
  actions: {
    setShowCart(payloadBoolean: boolean) {
      this.showCart = payloadBoolean
    }
  },
  getters: {}
})