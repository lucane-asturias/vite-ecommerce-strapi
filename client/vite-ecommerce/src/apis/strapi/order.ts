const API_URL = 'http://localhost:1337'

export const createOrderApi = async (data) => {
  const dataToSend = { data }
  try {
    const url = `${API_URL}/api/orders`
    const params = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend),
    }

    const response = await window.fetch(url, params)
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

export const getOrders = async (idUser) => {
  try {
    const response = await window.fetch(
      `${API_URL}/api/orders?where[user]=${idUser}&sort=createdAt:DESC`
    )
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}