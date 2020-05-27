import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../Shared/Utility";

const initialState = {
  loading: false,
  error: null,
  items: [],
};

const getProductsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    items: action.items,
  });
};
const getProductsFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const getProductsStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_START:
      return getProductsStart(state, action);
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return getProductsSuccess(state, action);
    case actionTypes.GET_PRODUCTS_FAIL:
      return getProductsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
