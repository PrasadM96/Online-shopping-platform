import * as actionTypes from "./actionTypes";
import axios from "axios";
import {tempData} from "../../assets/tempData"

export const getProductSuccess = (items) => {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    items: items,
  };
};

export const getProductFail = (error) => {
  return {
    type: actionTypes.GET_PRODUCTS_FAIL,
    error: error,
  };
};

export const getProductStart = () => {
  return {
    type: actionTypes.GET_PRODUCTS_START,
  };
};

export const getAllProducts = (path) => {
  return (dispatch) => {
    /*dispatch(getProductStart());
    axios
      .get("/shop/get-all-products", {
        params: {
          category: path,
        },
      })
      .then((items) => {
        dispatch(getProductSuccess(items.data));
      })
      .catch((err) => {
        dispatch(getProductFail(err));
      });*/
      dispatch(getProductSuccess(tempData))
  };
};
////////////////////////////////////////////////////////////////////////////////////////////////
export const getSearchProductSuccess = (products) => {
  return {
    type: actionTypes.GET_SEARCH_PRODUCTS_SUCCESS,
    items: products,
  };
};

export const getSearchProductFail = (error) => {
  return {
    type: actionTypes.GET_SEARCH_PRODUCTS_FAIL,
    error: error,
  };
};

export const getSearchProductStart = () => {
  return {
    type: actionTypes.GET_SEARCH_PRODUCTS_START,
  };
};

export const getSearchProducts = (keyword) => {
  return (dispatch) => {
    dispatch(getSearchProductStart());
    axios
      .post("/shop/search", {
        keyword: keyword,
      })
      .then((products) => {
        dispatch(getSearchProductSuccess(products.data));
      })
      .catch((err) => {
        dispatch(getSearchProductFail(err));
      });
  };
};

export const addToCart = (id) => {
  return {
    type: actionTypes.ADD_TO_CART,
    id: id,
  };
};

export const increment = (id) => {
  return {
    type: actionTypes.INCREMENT,
    id: id,
  };
};

export const decrement = (id) => {
  return {
    type: actionTypes.DECREMENT,
    id: id,
  };
};

export const removeItem = (id) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    id: id,
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};

export const addTotals = () => {
  return {
    type: actionTypes.ADD_TOTALS,
  };
};

export const getItem = (id) => {
  return {
    type: actionTypes.GET_ITEM,
    id: id,
  };
};