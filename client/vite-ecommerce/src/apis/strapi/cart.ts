import { uniqBy, countBy } from "lodash";

export const addProductCartApi = (idProduct) => {
  const products = getCartApi();
  products.push(idProduct);

  localStorage.setItem('products', JSON.stringify(products));
}

export const getCartApi = () => {
  const products = localStorage.getItem('products');

  if (!products) return [];

  return JSON.parse(products);
}
