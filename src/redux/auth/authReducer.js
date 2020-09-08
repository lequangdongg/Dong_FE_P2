import { SET_LOGIN, LOG_OUT, GET_USER } from './authConstant';

const initialState = {
  auth: {
    loggedIn: false,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, loggedIn: true, user: action.payload };
    case LOG_OUT:
      return {};
    case GET_USER:
      return {...state, loggedIn: true, userlocal : action.payload}
    default:
      return state;
  }
};

export default authReducer;
