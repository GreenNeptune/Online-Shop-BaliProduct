import { GET_PRODUCT, FETCH_PRODUCTS, FILTER_PRODUCTS_BY_TITLE } from "./actionType";
import axios from 'axios';


export const getProduct = (product) => {
  return {
    type: GET_PRODUCT,
    payload: product
  }
}

export const searchProducts = (products, search) => {
  const filteredProducts = products.filter(product => {
    const productTitle = product.title.toLowerCase();
    return productTitle.includes(search.toLowerCase())
  }
  )
  return {
    type: FILTER_PRODUCTS_BY_TITLE,
    payload: filteredProducts
  }
}
export const fetchProducts = () => async dispatch => {
  const res = await axios('https://bali-product-server.herokuapp.com/api/products');
  const products = res.data;
  dispatch({
    type: FETCH_PRODUCTS,
    payload: products
  })
}