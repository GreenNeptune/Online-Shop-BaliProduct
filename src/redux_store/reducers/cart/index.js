import { GET_PRODUCT, FETCH_PRODUCTS, FILTER_PRODUCTS_BY_TITLE } from "./actionType";
const initialState = {
  products: [],
  filterProducts: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload }
    case FILTER_PRODUCTS_BY_TITLE:
      return { ...state, products: action.payload }
    case GET_PRODUCT:
    // return { ...state, products: [action.payload] };
    default:
      return state
  }
}