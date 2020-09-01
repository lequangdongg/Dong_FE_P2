import { SET_LOGIN, LOG_OUT } from './authConstant';
import axios from 'axios';
import { history } from '../../helper/history';

export const fetchUser = (user) => {
  return (dispach) => {
    return axios({
      method: 'get',
      url: `http://localhost:4000/users?email=${user.email}&&password=${user.password}`,
      // data: user,
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      if (res.data[0] !== undefined) {
        localStorage.setItem('token', res.data[0].email);
        dispach(
          getUser({ email: res.data[0].email, password: res.data[0].password })
        );
        if (localStorage.getItem('token') === 'admin@gmail.com') {
          history.push('/admin');
        } else {
          history.push('/user');
        }
      }
      // return res;
    });
  };
};

export const getUser = (user) => {
  return {
    type: SET_LOGIN,
    payload: user,
  };
};

export const logOut = () => {
  localStorage.removeItem('token');
  history.push('/login');
  return {
    type: LOG_OUT,
  };
};
