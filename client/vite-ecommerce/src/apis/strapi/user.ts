interface FormData {
  username?:     string
  email?:    string
  password: string
}

const API_URL = 'http://localhost:1337'

export const registerApi = async (formData: FormData) => {
  try {
    const url = `${API_URL}/api/auth/local/register`
    const params = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }

    const response = await window.fetch(url, params)
    const result = await response.json()

    return result
  } catch (error) {
    console.log('error', error)
    return null
  }
}

export const loginApi = async (formData: FormData) => {
  try {
    const url = `${API_URL}/api/auth/local`
    const params = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }

    const response = await window.fetch(url, params)
    const result = await response.json()

    return result
  } catch (error) {
    console.log('error', error)
    return null
  }
}