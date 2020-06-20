import * as actionTypes from "./actionTypes";
import axios from "axios";
import { tempData, tempData2 } from "../../assets/tempData";

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
  console.log(path);

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

//////////////////checkout////////////////////
export const getCheckoutFail = (error) => {
  return {
    type: actionTypes.GET_CHECKOUT_ITEM_FAIL,
    error: error.message,
  };
};

export const getcheckoutSuccess = (item) => {
  return {
    type: actionTypes.GET_CHECKOUT_ITEM_SUCCESS,
    item: item,
  };
};

export const getCheckoutStart = () => {
  return {
    type: actionTypes.GET_CHECKOUT_ITEM_START,
  };
};

export const getSingleItem = (id) => {
  return (dispatch) => {
    dispatch(getCheckoutStart());
    axios
      .get("/shop/get-single-product", {
        params: {
          id: id,
        },
      })
      .then((item) => {
        dispatch(getcheckoutSuccess(item));
      })
      .catch((err) => {
        dispatch(getCheckoutFail(err));
      });
  };
};

///////////////////////////////cart///////////4
export const getCartItmesStart = () => {
  return {
    type: actionTypes.GET_CART_START,
  };
};

export const getCartItemSuccess = (itemArr) => {
  return {
    type: actionTypes.GET_CART_SUCCESS,
    itemArr: itemArr,
  };
};

export const getCartItemFail = (err) => {
  return {
    type: actionTypes.GET_CART_FAIL,
    error: err.message,
  };
};

export const getCartItem = () => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(getCartItmesStart());
    axios
      .get("/shop/get-cart", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((results) => {
        dispatch(getCartItemSuccess(results.data));
      })
      .catch((err) => {
        dispatch(getCartItemFail(err));
      });
  };
};

/////////update////////////////////
export const updateItemCountStart = () => {
  return {
    type: actionTypes.UPDATE_CART_ITEMS_START,
  };
};
export const updateItemCountSuccess = (result) => {
  return {
    type: actionTypes.UPDATE_CART_ITEMS_SuCCESS,
    item: result,
  };
};
export const updateItemCountFail = (error) => {
  return {
    type: actionTypes.UPDATE_CART_ITEMS_FAIL,
    error: error.message,
  };
};

export const updateCartItem = (prodId, amount) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(updateItemCountStart());
    axios
      .post(
        "/shop/update-cart",
        { productId: prodId, newAmount: amount },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((results) => {
        dispatch(updateItemCountSuccess(results.data));
        dispatch(getCartItem());
      })
      .catch((err) => {
        dispatch(updateItemCountFail(err));
      });
  };
};

///////////////////////////add to cart////////////////////
export const addToCartSuccess = (item) => {
  return {
    type: actionTypes.ADD_ITEM_TO_CART_SUCCESS,
    item: item.data,
  };
};

export const addToCartFail = (error) => {
  return {
    type: actionTypes.ADD_DETAILS_FAIL,
    error: error.message,
  };
};

export const addItemToCart = (prodId) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    axios
      .post(
        "/shop/add-to-cart",
        { productId: prodId },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((results) => {
        dispatch(addToCartSuccess(results));
      })
      .catch((err) => {
        dispatch(addToCartFail(err));
      });
  };
};

export const clearCartItemStart = () => {
  return {
    type: actionTypes.CLEAR_CART_ITEMS_START,
  };
};

export const clearCartItemSuccess = (item) => {
  return {
    type: actionTypes.CLEAR_CART_ITEMS_SUCCESS,
    item: item.data,
  };
};

export const clearCartItemFail = (error) => {
  return {
    type: actionTypes.CLEAR_CART_ITEMS_ERROR,
    error: error.message,
  };
};

export const clearCartItems = (cartItemArr) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(clearCartItemStart());
    axios
      .post(
        "/shop/clear-cart",
        { cartItemArr: cartItemArr },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((results) => {
        dispatch(clearCartItemSuccess(results.data));
      })
      .catch((err) => {
        dispatch(clearCartItemFail(err));
      });
  };
};
