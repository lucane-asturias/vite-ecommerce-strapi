const API_URL = 'http://localhost:1337'

export const getProducts = async (limit = 50) => {
  try {
    const response = await window.fetch(
      `${API_URL}/api/products?sort=createdAt:DESC&pagination[limit]=${limit}&populate=image,category`
    )
    const result = response.json()
    return result
  } catch (error) {
    console.log('error', error)
    return null
  }
}

export const getProductsByCategory = async (category) => {
  try {
    const response = await window.fetch(
      `${API_URL}/api/products?fields=name&fields=price&populate=image,category&filters[category][slug][$eq]=${category}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('error', error);
    return null;
  }
}