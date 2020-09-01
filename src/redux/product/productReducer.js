import {
  GET_PRODUCTS,
  HOT_TREND_PRODUCTS,
  RECENTYLE_VIEWED_PRODUCTS,
  SORT_PRODUCTS,
} from './productConstant';

const initialState = [];

const sortProduct = (arr, number) => {
  if (number == 1) {
    return arr.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  } else if (number == 2) {
    return arr.sort((a, b) => {
      const typeA = a.type.toUpperCase();
      const typeB = b.type.toUpperCase();
      if (typeA < typeB) {
        return -1;
      }
      if (typeA > typeB) {
        return 1;
      }
      return 0;
    });
  } else if (number == 3) {
    return arr.sort((a, b) => a.price - b.price);
  } else if (number == 4) {
    return arr.sort((a, b) => b.rating - a.rating);
  }

  return [...arr];
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    case HOT_TREND_PRODUCTS:
      return action.payload;
    case RECENTYLE_VIEWED_PRODUCTS:
      const view = action.payload;
      const filter = view.filter((items) => items.view > 0);
      return filter;
    case SORT_PRODUCTS:
      return sortProduct(state, action.payload);
    default:
      return state;
  }
};

export default productReducer;
