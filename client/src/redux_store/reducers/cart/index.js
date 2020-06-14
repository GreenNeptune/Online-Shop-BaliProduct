import { ADD_PRODUCT_TO_CART } from "./actionTypes";
import { addProductToCart, getCartTotal } from "./cart.utils";


const initialState = {
  products: [],
  total: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const products = addProductToCart([...state.products], action.payload)
      return {
        ...state,
        products: products,
        total: getCartTotal(products)
      }
    default:
      return state
  }
}