import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import registerReducer from './register/registerReducer';
import productReducer from './product/productReducer';
import cartUserReducer from './cartUser/cartUserReducer';
const rootReducers = combineReducers({
  auth: authReducer,
  register: registerReducer,
  products: productReducer,
  cartUser: cartUserReducer,
});

export default rootReducers;
