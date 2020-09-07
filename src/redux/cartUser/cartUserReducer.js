import { ORDER_PRODUCT, GET_PRODUCT, DELETE_PRODUCT } from './cartUserConstant';
const initialState = {
  items: [],
};

const cartUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PRODUCT:
      console.log(action.payload);
      return state;
    case GET_PRODUCT:
      const items = action.payload;
      return { ...state, items };
    case DELETE_PRODUCT:
      console.log(action.payload);
      const listProduct = [...state.items];
      const updateProduct = listProduct.findIndex(
        (product) => product.id === action.payload
      );
      listProduct.splice(updateProduct, 1);
      return {
        ...state,
        items: listProduct,
      };
    default:
      return state;
  }
};

export default cartUserReducer;
