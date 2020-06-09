import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../Shared/Utility";
import { tempData } from "../../assets/tempData";

const initialState = {
  loading: false,
  error: null,
  items: [],
  searchItem: [],
  cart: [],
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
};

const getProductsSuccess = (state, action) => {
  let items = [];
  action.items.forEach((item) => {
    const singleItem = { ...item };
    items = [...items, singleItem];
  });
  return updateObject(state, {
    loading: false,
    items: items,
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

const getSearchProductsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    searchItem: action.items,
  });
};
const getSearchProductsFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const getSearchProductsStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};

const getItem = (state, action) => {
  const item = state.items.find((i) => i._id === action.id);
  return item;
};

const addToCart = (state, action) => {
  let tempItems = state.items;
  const item = state.items.find((item) => item._id === action.id);
  const index = tempItems.indexOf(item);
  const product = tempItems[index];
  product.inCart = true;
  product.count = 1;
  const price = product.price;
  product.total = price;
  return updateObject(state, {
    cart: [...state.cart, product],
  });
};

const increment = (state, action) => {
  let tempCart = [...state.cart];
  const selectedItem = tempCart.find((item) => item._id === action.id);
  const index = tempCart.indexOf(selectedItem);
  const item = tempCart[index];
  item.count = item.count + 1;
  item.total = item.count * item.price;
  let subTotal = 0;
  state.cart.map((item) => (subTotal += item.total));
  const tempTax = subTotal * 0.1;
  const tax = parseFloat(tempTax.toFixed(2));
  const total = subTotal + tax;
  return updateObject(state, {
    cart: tempCart,
    cartSubTotal: subTotal,
    cartTax: tax,
    cartTotal: total,
  });
};

const decrement = (state, action) => {
  let tempCart = [...state.cart];
  const selectedItem = tempCart.find((item) => item._id === action.id);
  const index = tempCart.indexOf(selectedItem);
  const item = tempCart[index];
  item.count = item.count - 1;
  if (item.count === 0) {
    item.inCart = false;
    item.count = 0;
    item.total = 0;
    tempCart = tempCart.filter((i) => i._id !== item._id);
  } else {
    item.total = item.count * item.price;
  }
  let subTotal = 0;
  state.cart.map((item) => (subTotal += item.total));
  const tempTax = subTotal * 0.1;
  const tax = parseFloat(tempTax.toFixed(2));
  const total = subTotal + tax;
  return updateObject(state, {
    cart: tempCart,
    cartSubTotal: subTotal,
    cartTax: tax,
    cartTotal: total,
  });
};

const removeItem = (state, action) => {
  let tempCart = state.cart;
  tempCart = tempCart.filter((item) => item._id !== action.id);
  let subTotal = 0;
  tempCart.map((item) => (subTotal += item.total));
  const tempTax = subTotal * 0.1;
  const tax = parseFloat(tempTax.toFixed(2));
  const total = subTotal + tax;
  return updateObject(
    state,
    {
      cart: tempCart,
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total,
    },
  );
};

const clearCart = (state, action) => {
  console.log("cart was cleared");
  return updateObject(
    state,
    {
      cart: [],
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0,
    },
    console.log(state.cart)
  );
};

const addTotals = (state, action) => {
  let subTotal = 0;
  state.cart.map((item) => (subTotal += item.total));
  const tempTax = subTotal * 0.1;
  const tax = parseFloat(tempTax.toFixed(2));
  const total = subTotal + tax;
  return updateObject(state, {
    cartSubTotal: subTotal,
    cartTax: tax,
    cartTotal: total,
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
    case actionTypes.GET_SEARCH_PRODUCTS_START:
      return getSearchProductsStart(state, action);
    case actionTypes.GET_SEARCH_PRODUCTS_SUCCESS:
      return getSearchProductsSuccess(state, action);
    case actionTypes.GET_SEARCH_PRODUCTS_FAIL:
      return getSearchProductsFail(state, action);
    case actionTypes.ADD_TO_CART:
      return addToCart(state, action);
    case actionTypes.INCREMENT:
      return increment(state, action);
    case actionTypes.DECREMENT:
      return decrement(state, action);
    case actionTypes.REMOVE_ITEM:
      return removeItem(state, action);
    case actionTypes.CLEAR_CART:
      return clearCart(state, action);
    case actionTypes.ADD_TOTALS:
      return addTotals(state, action);
    case actionTypes.GET_ITEM:
      return getItem(state, action);
    default:
      return state;
  }
};

export default reducer;
