import * as actionTypes from "./actionTypes";
import axios from "axios";

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
