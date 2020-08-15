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
  editProd: null,
  updateLoading: false,
  updatedItem: null,
  updateError: null,
  sellRegLoading: false,
  sellRegData: null,
  sellRegError: null,
  deleteLoading: false,
  deleteError: null,
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

const addDetailsSetSuccess = (state, action) => {
  return updateObject(state, {
    succeeded: false,
    updatedItem: null,
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
    deleteLoading: true,
    deleteError: null,
  });
};

const deleteItemFail = (state, action) => {
  return updateObject(state, {
    deleteLoading: false,
    deleteError: action.error,
  });
};

const deleteItemSuccess = (state, action) => {
  return updateObject(state, {
    deleteError: null,
    deleteLoading: false,
  });
};

////////////////////////get EDIT///////////////////////////////////////

const getEditProductSuccess = (state, action) => {
  return updateObject(state, {
    // editProdLoading: false,
    // editProdError: null,
    editProd: action.item,
  });
};

///////////////////////////update/////////////////////////////////////
const updateItemStart = (state, action) => {
  return updateObject(state, {
    updateLoading: true,
    updateError: null,
  });
};

const updateItemSuccess = (state, action) => {
  return updateObject(state, {
    updateLoading: false,
    updateError: null,
    updatedItem: action.result,
    editProd: null,
  });
};
const updateItemFail = (state, action) => {
  return updateObject(state, {
    updateLoading: false,
    updateError: action.error,
  });
};

//////////////////selling-reg///////////////////////
const sellingRegStart = (state, action) => {
  return updateObject(state, {
    sellRegLoading: true,
    sellRegError: null,
  });
};

const sellingRegSuccess = (state, action) => {
  if (action.detail) {
    localStorage.setItem("sellerStatus", true);
  }
  return updateObject(state, {
    sellRegLoading: false,
    sellRegError: null,
    sellRegData: action.detail,
  });
};
const sellingRegFail = (state, action) => {
  return updateObject(state, {
    sellRegLoading: false,
    sellRegError: action.error,
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
    case actionTypes.GET_EDIT_PRODUCT_SUCCESS:
      return getEditProductSuccess(state, action);
    case actionTypes.UPDATE_SELLING_ITEM_START:
      return updateItemStart(state, action);
    case actionTypes.UPDATE_SELLING_ITEM_SUCCESS:
      return updateItemSuccess(state, action);
    case actionTypes.UPDATE_SELLING_ITEM_FAIL:
      return updateItemFail(state, action);
    case actionTypes.SELLING_REGISTER_START:
      return sellingRegStart(state, action);
    case actionTypes.SELLING_REGISTER_SUCCESS:
      return sellingRegSuccess(state, action);
    case actionTypes.SELLING_REGISTER_FAIL:
      return sellingRegFail(state, action);
    default:
      return state;
  }
};

export default reducer;
