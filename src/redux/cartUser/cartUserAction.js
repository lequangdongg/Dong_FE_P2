import { ORDER_PRODUCT, GET_PRODUCT, DELETE_PRODUCT } from './cartUserConstant';
import axios from 'axios';
import getDateTime from '../../common/getDateTime';
const api = `http://localhost:4000`;

export const postOrderUser = (info, totalPrice, cart, image, name) => {
  return (dispatch) => {
    return axios({
      method: 'post',
      url: `${api}/order`,
      data: {
        idUser: info.id,
        date: getDateTime(),
        totalPrice: totalPrice,
        cart: cart,
        address: info.address,
        phone: info.phone,
        image,
        name,
      },
    }).then((res) => dispatch(getOrderUser(res.data)));
  };
};

export const getOrderUser = (products) => {
  return {
    type: ORDER_PRODUCT,
    payload: products,
  };
};

export const fetchHistoryProduct = (params) => {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/order?idUser=${params}`,
    }).then((res) => dispatch(getHistoryProduct(res.data)));
  };
};

export const getHistoryProduct = (items) => {
  return {
    type: GET_PRODUCT,
    payload: items,
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    return axios({
      method: 'delete',
      url: `${api}/order/${id}`,
    }).then((res) => dispatch(deleteProductSuccess(id)));
  };
};

export const deleteProductSuccess = (productsNew) => {
  return {
    type: DELETE_PRODUCT,
    payload: productsNew,
  };
};
