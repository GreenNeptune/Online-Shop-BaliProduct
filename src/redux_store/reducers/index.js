import products from '../reducers/products';
import cart from '../reducers/cart';
import { combineReducers } from 'redux';

export default combineReducers({
  products,
  cart,
});


