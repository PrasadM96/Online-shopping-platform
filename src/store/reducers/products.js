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

const addToCart = (state, action) => {
  let tempItems = [...state.items];
  const item = state.items.find((item) => item._id === action.id);
  const index = tempItems.indexOf(item);
  const product = tempItems[index];
  product.inCart = true;
  product.count = 1;
  const price = product.price;
  product.total = price;
  console.log(product);
  return updateObject(state, {
    items: tempItems,
    cart: [...state.cart, product],
  });
};

const increment = (state, action) => {
  console.log("increment");
  return updateObject(state, {
    cart: {
      ...state.cart,
      [state.cart.find((item) => item._id === action.id).count]:
        [state.cart.find((item) => item._id === action.id).count] + 1,
    },
  });
};

const decrement = (state, action) => {
  console.log("decrement method");
  return updateObject(
    state,
    {
      cart: {
        ...state.cart,
        [state.cart.find((item) => item._id === action.id).count]:
          [state.cart.find((item) => item._id === action.id).count] - 1,
      },
    },
    console.log(state.cart.find((item) => item._id === action.id).count)
  );
};

const removeItem = (state, action) => {
  console.log("item removed");
  let tempItems = [...state.items];
  let tempCart = [...state.cart];

  tempCart.filter((item) => item._id !== action.id);

  const index = tempItems.indexOf(getItem(action.id));
  let removedItem = tempItems[index];
  removedItem.inCart = false;
  removedItem.count = 0;
  removedItem.total = 0;

  return updateObject(
    state,
    {
      cart: [...tempCart],
      items: [...tempItems],
    },
    console.log(state.cart)
  );
};

const clearCart = (state, action) => {
  console.log("cart was cleared");
  return updateObject(
    state,
    {
      cart: [],
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
    return updateObject(state,{
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total,}
  )
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
