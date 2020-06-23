import { GET_PRODUCTS, FILTER_PRODUCTS_BY_TITLE } from "./actionType";
import axios from 'axios';


export const getProducts = () => async dispatch => {
  const res = await axios('https://baliproduct-heroku.herokuapp.com/api_v1/products');
  const products = res.data;
  dispatch({
    type: GET_PRODUCTS,
    payload: products
  })
}
export const filterProductsByTitle = (text) => {

  return {
    type: FILTER_PRODUCTS_BY_TITLE,
    payload: text
  }
}
