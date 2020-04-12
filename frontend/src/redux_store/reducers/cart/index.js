import PRODUCTS from '../../../api/products.json'
import { ADD_PRODUCT } from "./actions";


const initialState = {
  products: PRODUCTS
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state
  }
}