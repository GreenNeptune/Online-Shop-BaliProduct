import { ADD_PRODUCT } from "./actionTypes";


const initialState = {
  products: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      const { products } = state
      return {
        ...state,
        products: [...products, action.payload]
      }
    default:
      return state
  }
}