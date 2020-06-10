import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_TITLE } from "./actionType";
import { filteredProducts } from "../../../utils/filter";
const initialState = {
  products: [],
  visibleProducts: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload, visibleProducts: action.payload }
    case FILTER_PRODUCTS_BY_TITLE:
      const filterProductsByTitle = filteredProducts(state.products, action.payload);
      return {
        ...state,
        visibleProducts: filterProductsByTitle,

      }

    default:
      return state
  }
}