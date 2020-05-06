import PRODUCTS from '../../../api/products.json'

const initialState = {
  products: PRODUCTS
}

export default function (state = initialState, action) {
  switch (action.type) {

    default:
      return state
  }
}