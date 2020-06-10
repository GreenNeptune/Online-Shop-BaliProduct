import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_TITLE } from "./actionType";
import axios from 'axios';


export const fetchProducts = () => async dispatch => {
  const res = await axios('https://bali-product-server.herokuapp.com/api/products');
  const products = res.data;
  dispatch({
    type: FETCH_PRODUCTS,
    payload: products
  })
}
export const filterProductsByTitle = (text) => {

  return {
    type: FILTER_PRODUCTS_BY_TITLE,
    payload: text
  }
}
