export const setTokenApi = (token: '') => {
  localStorage.setItem('token', token)
}

export const getTokenApi = () => {
  return localStorage.getItem('token')
}

export const deleteTokenApi = () => {
  return localStorage.removeItem('token')
}