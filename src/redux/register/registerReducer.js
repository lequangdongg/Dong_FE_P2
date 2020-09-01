import { SET_REGISTER } from './registerConstant';

const initialState = {
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER:
      return {...state, user : action.payload}
    default:
      return state;
  }
};

export default registerReducer;
