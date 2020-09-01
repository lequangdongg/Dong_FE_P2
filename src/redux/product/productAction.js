import axios from 'axios';
import {
  GET_PRODUCTS,
  HOT_TREND_PRODUCTS,
  RECENTYLE_VIEWED_PRODUCTS,
  SORT_PRODUCTS,
} from './productConstant';
const api = 'http://localhost:4000';
export const fetchProducts = () => {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/products`,
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => dispatch(getProducts(res.data)));
  };
};

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    payload: products,
  };
};

export const fetchProductsHotTrend = () => {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/products?status=Hot`,
    }).then((res) => dispatch(getHotTrendProducts(res.data)));
  };
};

export const getHotTrendProducts = (productsHotTrend) => {
  return {
    type: HOT_TREND_PRODUCTS,
    payload: productsHotTrend,
  };
};

export const fetchRecentlyViewedProducts = () => {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/products`,
    }).then((res) => dispatch(getRecentlyViewedProducts(res.data)));
  };
};

export const getRecentlyViewedProducts = (view) => {
  return {
    type: RECENTYLE_VIEWED_PRODUCTS,
    payload: view,
  };
};

// export const fetchProductsSort = (number) => {
//   return (dispatch) => {
//     return axios({
//       method: 'get',
//       url: `${api}/products`,
//     }).then((res) => dispatch(sortProducts(number)));
//   };
// };

export const sortProducts = (number) => {
  return {
    type: SORT_PRODUCTS,
    payload: number,
  };
};
