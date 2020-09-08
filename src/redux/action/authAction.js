import { SET_LOGIN, GET_DATA } from '../constant';
import axios from 'axios';
import { history } from '../../helper/hisory';

export const fetchUser = (user) => {
  return (dispach) => {
    return axios({
      method: 'post',
      url: 'http://localhost:4000/users',
      data: user,
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      if (res.data) {
        localStorage.setItem('token', res.data.token);
        dispach(getUser(res.data.token));
        history.push('/');
      }
      return res;
    });
  };
};

export const getUser = (user) => {
  return {
    type: SET_LOGIN,
    payload: user,
  };
};
