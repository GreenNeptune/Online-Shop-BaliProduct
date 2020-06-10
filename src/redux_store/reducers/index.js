import products from '../reducers/products';
import user from '../reducers/user';
import { combineReducers } from 'redux';

export default combineReducers({
  products,
  user,
});


