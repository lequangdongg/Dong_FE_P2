import axios from 'axios';
import { history } from '../../helper/history';
import { SET_REGISTER } from './registerConstant';

export const createUser = (user) => {
  return (dispatch) => {
    return axios({
      method: 'post',
      url: 'http://localhost:4000/users',
      data: user,
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      console.log(res.data);
      const data = res.data;
      dispatch(getRegister(data));
      history.push('/login');
    });
  };
};

export const getRegister = (data) => {
  return {
    type: SET_REGISTER,
    payload: data,
  };
};
