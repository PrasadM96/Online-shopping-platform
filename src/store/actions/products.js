import * as actionTypes from "./actionTypes";
import axios from "axios";

////////////////////////////////////////ADD PRODUCT///////////////////////
export const postStart = () => {
  return {
    type: actionTypes.ADD_DETAILS_START,
  };
};

export const postSuccess = () => {
  return {
    type: actionTypes.ADD_DETAILS_SUCCESS,
  };
};

export const postFail = (error) => {
  return {
    type: actionTypes.ADD_DETAILS_FAIL,
    error: error,
  };
};

export const setPostSuccess = () => {
  return {
    type: actionTypes.ADD_DETAILS_SET_SUCCESS,
  };
};

// export const setImages = (images) => {
//   return {
//     type: actionTypes.SET_IMAGES,
//     images: images,
//   };
// };

export const postProduct = (item) => {
  return (dispatch) => {
    dispatch(postStart());
    axios
      .post("/shop/post-product", item)
      .then((response) => {
        dispatch(postSuccess());
      })
      .catch((error) => {
        dispatch(postFail(error));
      });
  };
};

/////////////////////////////////////////GET SELLING PRODUCT///////////////
export const getSellingProductStart = () => {
  return {
    type: actionTypes.GET_SELLING_PRODUCTS_START,
  };
};

export const getSellingProductSuccess = (products) => {
  return {
    type: actionTypes.GET_SELLING_PRODUCTS_SUCCESS,
    products: products,
  };
};

export const getSellingProductFail = (error) => {
  return {
    type: actionTypes.GET_SELLING_PRODUCTS_FAIL,
    error: error,
  };
};

export const getSellingProduct = () => {
  return (dispatch) => {
    dispatch(getSellingProductStart());
    axios
      .get("/shop/get-selling-products")
      .then((products) => {
        dispatch(getSellingProductSuccess(products.data));
      })
      .catch((err) => {
        dispatch(getSellingProductFail(err));
      });
  };
};

////////////////////delete item///////////////
export const deleteItemFail = () => {
  return {
    type: actionTypes.DELETE_SELLING_ITEM_FAIL,
  };
};
export const deleteItemStart = () => {
  return {
    type: actionTypes.DELETE_SELLING_ITEM_START,
  };
};
export const delteItemSuccess = () => {
  return {
    type: actionTypes.DELETE_SELLING_ITEM_SUCCESS,
  };
};

export const deleteSellingItem = (prodId) => {
  return (dispatch) => {
    dispatch(deleteItemStart());
    axios
      .post("/shop/delete-selling-item", {
        prodId: prodId,
      })
      .then((response) => {
        dispatch(delteItemSuccess(prodId));
        dispatch(getSellingProduct());
      })
      .catch((err) => {
        dispatch(deleteItemFail(err));
      });
  };
};
