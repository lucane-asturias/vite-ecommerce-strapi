import { uniqBy, countBy } from "lodash"
const API_URL = 'http://localhost:1337'

export const addProductCartApi = (idProduct) => {
  const products = getCartApi()
  products.push(idProduct)

  localStorage.setItem('products', JSON.stringify(products))
}

export const getCartApi = () => {
  const products = localStorage.getItem('products')

  if (!products) return []

  return JSON.parse(products)
}

export const getProductsCartApi = async () => {
  const idProducts = getCartApi() // all ids from localstorage

  if (idProducts?.lenght === 0) return null

  try {
    const products = []

    for await (const idProduct of idProducts) {
      const response = await window.fetch(`${API_URL}/api/products/${idProduct}?populate=image`)
      const result = await response.json()
      
      const productId = result.data.id
      const { name, price } = result.data.attributes
      const { url } = result.data.attributes.image.data.attributes

      products.push({productId, name, price, url})
    }

    const productsCount = countBy(products, (product) => {
      return product.name // return an obj counting ocurrences (get quantity)
    })
    
    const combined = uniqBy(products, (product) => {
      const productTemp = product
      productTemp.quantity = productsCount[product.name]
      return productTemp.name // unifies equals by product name
    })

    return combined
  } catch (error) {
    console.log(error)
    return null
  }
}

export const deleteProductCartApi = async (idProduct) => {
  const products = getCartApi()

  const index = products.indexOf(idProduct)
  if (index > -1) products.splice(index, 1)

  localStorage.setItem('products', JSON.stringify(products))
}

export function deleteAllProductCartApi(idProduct) {
  // const products = getCartApi()

  // const index = products.indexOf(idProduct)

  // if (index > -1) {
  //   products.splice(index, 1)
  //   localStorage.setItem(PRODUCTS, JSON.stringify(products))
  //   deleteAllProductCartApi(idProduct)
  // }
}

export function deleteCartApi() {
  // localStorage.removeItem(PRODUCTS)
}