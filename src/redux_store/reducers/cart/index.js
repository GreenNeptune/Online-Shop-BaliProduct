import { products } from '../../../api/DB.json'

const initialState = {
  products,
}

export default function (state = initialState, action) {
  switch (action.type) {

    default:
      return state
  }
}