import { ADD_PRODUCT_TO_CART } from "./actionTypes";


const initialState = {
  products: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    default:
      return state
  }
}