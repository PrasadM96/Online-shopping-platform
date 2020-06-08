import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../Shared/Utility";

const initialState = {
  details: null,
  uploadedImages: [],
  loading: false,
  error: null,
  succeeded: false,
  items: [],
  cart: [],
};

const setItems = (state, action) => {
  let items = [];
  action.items.forEach((item) => {
    const singleItem = { ...item };
    items = [...items, singleItem];
  });
  return updateObject(state, {
    items: items,
    cart: items,
  });
};
const getItem = (state, action) => {
  const item = state.items.find((i) => i._id === action.id);
  return item;
};

////////////////////add-item////////////////////
const addDetailsFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const addDetailsStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    succeeded: false,
  });
};

const addDetailsSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    succeeded: true,
  });
};

// const setImages = (state, action) => {
//     return updateObject(state, {

//     })
// }

const addDetailsSetSuccess = (state, action) => {
  return updateObject(state, {
    succeeded: false,
    error: null,
  });
};

///////////////////////////grt-selling-item////////////////////////
const getSellProductsStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};
const getSellProductsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    items: action.products, //action.products i change
    error: null,
  });
};
const getSellProductsFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

//////////////////delete items/////////////
const deleteItemStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};

const deleteItemFail = (state, action) => {
  return updateObject(state, {
    lodaing: false,
    error: action.error,
  });
};

const deleteItemSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DETAILS_START:
      return addDetailsStart(state, action);
    case actionTypes.ADD_DETAILS_SUCCESS:
      return addDetailsSuccess(state, action);
    case actionTypes.ADD_DETAILS_FAIL:
      return addDetailsFail(state, action);
    case actionTypes.SET_ITEMS:
      return setItems(state, action);
    // case actionTypes.SET_IMAGES:
    //   return setImages(state, action);
    case actionTypes.ADD_DETAILS_SET_SUCCESS:
      return addDetailsSetSuccess(state, action);
    case actionTypes.GET_SELLING_PRODUCTS_START:
      return getSellProductsStart(state, action);
    case actionTypes.GET_SELLING_PRODUCTS_SUCCESS:
      return getSellProductsSuccess(state, action);
    case actionTypes.GET_SELLING_PRODUCTS_FAIL:
      return getSellProductsFail(state, action);
    case actionTypes.DELETE_SELLING_ITEM_START:
      return deleteItemStart(state, action);
    case actionTypes.DELETE_SELLING_ITEM_FAIL:
      return deleteItemFail(state, action);
    case actionTypes.DELETE_SELLING_ITEM_SUCCESS:
      return deleteItemSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
