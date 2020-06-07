import * as actionTypes from "./actionTypes";
import axios from "axios";

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
    dispatch(getProductStart());
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
      });
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
