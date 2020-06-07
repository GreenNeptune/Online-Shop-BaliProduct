import cart from '../reducers/cart';
import user from '../reducers/user';
import { combineReducers } from 'redux';

export default combineReducers({
  cart,
  user,
});


