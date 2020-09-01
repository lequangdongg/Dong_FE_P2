import { SET_LOGIN, LOG_OUT } from './authConstant';

const initialState = {
  auth: {
    loggedIn: false,
    user: {},
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, loggedIn: true, user: action.payload };
    case LOG_OUT:
      return {};
    default:
      return state;
  }
};

export default authReducer;
