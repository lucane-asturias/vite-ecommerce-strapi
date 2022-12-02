const API_URL = 'http://localhost:1337'

export const getCategoriesApi = async () => {
  try {
    const response = await window.fetch(`${API_URL}/api/categories`)
    const result = await response.json()
    return result
  } catch (error) {
    console.log('error', error)
    return null
  }
}