import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../Shared/Utility";

const initialState = {
  loading: false,
  error: null,
  cart: [],
  cartSubTotal: 0.0,
  cartTax: 0.0,
  cartTotal: 0.0,
  updateCartLaoding: false,
  updatedCart: null,
  updateCartError: null,
  addtoCartSuccess: false,
  addToCartError: null,
  clearCartLoading: false,
  clearCartItem: null,
  clearCartError: null,
  cartItemCount: [],
  removeSingleItemLoading: false,
  removeSingleItem: null,
  removeSingleItemError: null,
};

const setTotal = (state, action) => {
  console.log("cartSubTotal", action.cartSubTotal);
  return updateObject(state, {
    cartSubTotal: action.cartSubTotal,
    cartTax: action.cartTax,
    cartTotal: action.cartSubTotal + action.cartTax,
  });
};
const getCartSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    cart: action.itemArr.cartArr,
    cartItemCount: action.itemArr.count,
    error: null,
  });
};

const getCartFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
    addtoCartSuccess: false,
  });
};
const getCartStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
    addtoCartSuccess: false,
  });
};

const updateCartStart = (state, action) => {
  return updateObject(state, {
    updateCartLaoding: true,
    updateCartError: null,
    addtoCartSuccess: false,
  });
};

const updateCartSuccess = (state, action) => {
  var updateCart = state.cart;
  console.log(action.item.cart.items);
  console.log("cart");

  console.log(state.cart);
  var newCart = action.item.cart.items.map((newItem, index) => {
    const updateCartIndex = updateCart.findIndex((cp) => {
      return cp._id === newItem.productId;
    });
    console.log(updateCartIndex, newItem.quantity);
    if (updateCartIndex >= 0) {
      updateCart[updateCartIndex].quantity = newItem.quantity;
    }
  });

  console.log(updateCart);

  return updateObject(state, {
    updateCartLaoding: true,
    updateCartError: null,
    updatedCart: action.item,
    cart: updateCart,
  });
};

const updateCartFail = (state, action) => {
  return updateObject(state, {
    updateCartLaoding: false,
    updateCartError: action.error,
  });
};

const addItemtoCartSuccess = (state, action) => {
  return updateObject(state, {
    addtoCartSuccess: true,
    addToCartError: null,
  });
};

const addItemtoCartFail = (state, action) => {
  return updateObject(state, {
    addtoCartItem: null,
    addToCartError: action.error,
  });
};

const cleartCartStart = (state, action) => {
  return updateObject(state, {
    clearCartError: null,
    clearCartLoading: true,
  });
};

const clearCartSuccess = (state, action) => {
  return updateObject(state, {
    clearCartItem: action.item,
    clearCartFail: null,
    clearCartLoading: false,
  });
};

const clearCartFail = (state, action) => {
  return updateObject(state, {
    clearCartError: action.error,
    clearCartLoading: false,
  });
};

///////////////////////remove single item///////////////////////
const deleteSigleItemStart = (state, action) => {
  return updateObject(state, {
    removeSingleItemLoading: true,
    removeSingleItemError: null,
  });
};
const deleteSigleItemSuccess = (state, action) => {
  return updateObject(state, {
    removeSingleItemLoading: false,
    removeSingleItem: action.item,
  });
};

const deleteSigleItemFail = (state, action) => {
  return updateObject(state, {
    removeSingleItemLoading: false,
    removeSingleItemError: action.error,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CART_START:
      return getCartStart(state, action);
    case actionTypes.GET_CART_SUCCESS:
      return getCartSuccess(state, action);
    case actionTypes.GET_CART_FAIL:
      return getCartFail(state, action);
    case actionTypes.UPDATE_CART_ITEMS_START:
      return updateCartStart(state, action);
    case actionTypes.UPDATE_CART_ITEMS_SuCCESS:
      return updateCartSuccess(state, action);
    case actionTypes.UPDATE_CART_ITEMS_FAIL:
      return updateCartFail(state, action);
    case actionTypes.ADD_ITEM_TO_CART_SUCCESS:
      return addItemtoCartSuccess(state, action);
    case actionTypes.ADD_ITEM_TO_CART_FAIL:
      return addItemtoCartFail(state, action);
    case actionTypes.CLEAR_CART_ITEMS_START:
      return cleartCartStart(state, action);
    case actionTypes.CLEAR_CART_ITEMS_SUCCESS:
      return clearCartSuccess(state, action);
    case actionTypes.CLEAR_CART_ITEMS_ERROR:
      return clearCartFail(state, action);
    case actionTypes.DELETE_SINGLE_CART_ITEM_START:
      return deleteSigleItemStart(state, action);
    case actionTypes.DELETE_SINGLE_CART_ITEM_FAIL:
      return deleteSigleItemFail(state, action);
    case actionTypes.DELETE_SINGLE_CART_ITEM_SUCCESS:
      return deleteSigleItemSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
