import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import registerReducer from './register/registerReducer';
import productReducer from './product/productReducer';
const rootReducers = combineReducers({
  auth: authReducer,
  register: registerReducer,
  products: productReducer,
});

export default rootReducers;
