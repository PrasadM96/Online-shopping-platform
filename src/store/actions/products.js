import * as actionTypes from "./actionTypes";
import axios from "axios";
import { browserHistory } from "react-router";

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

    const data = new FormData();

    item.files.map((file, index) => {
      data.append("file", file);
    });

    data.append("title", item.title);
    data.append("price", item.price);
    data.append("category", item.category);
    data.append("subCategory", item.subCategory);
    data.append("condition", item.condition);
    data.append("description", item.description);
    data.append("sellingArea", item.sellingArea);
    data.append("quantity", item.quantity);
    data.append("shippingFee", item.shippingFee);

    const token = localStorage.getItem("token");

    axios
      .post("/shop/post-product", data, {
        headers: {
          "x-auth-token": token,
          Accept: "*/*",
          "content-type":
            "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
        },
      })
      .then((response) => {
        dispatch(postSuccess());
      })
      .catch((error) => {
        dispatch(postFail(error));
      });
  };
};

export const setItems = (items) => {
  return {
    type: actionTypes.SET_ITEMS,
    items: items,
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
  const token = localStorage.getItem("token");

  return (dispatch) => {
    dispatch(getSellingProductStart());
    axios
      .get("/shop/get-selling-products", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((products) => {
        dispatch(getSellingProductSuccess(products.data));
      })
      .catch((err) => {
        dispatch(getSellingProductFail(err));
      });
  };
};

////////////////////delete item///////////////
export const deleteItemFail = (err) => {
  return {
    type: actionTypes.DELETE_SELLING_ITEM_FAIL,
    error: err.message,
  };
};
export const deleteItemStart = () => {
  return {
    type: actionTypes.DELETE_SELLING_ITEM_START,
  };
};
export const delteItemSuccess = (response) => {
  return {
    type: actionTypes.DELETE_SELLING_ITEM_SUCCESS,
    result: response,
  };
};

export const deleteSellingItem = (prodId) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(deleteItemStart());
    axios
      .post(
        "/shop/delete-selling-item",
        {
          prodId: prodId,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        dispatch(delteItemSuccess(response.data));
        dispatch(getSellingProduct());
      })
      .catch((err) => {
        dispatch(deleteItemFail(err));
      });
  };
};

////////////////GET edit product////////////////////////////

export const getEditProductSuccess = (item) => {
  return {
    type: actionTypes.GET_EDIT_PRODUCT_SUCCESS,
    item: item,
  };
};

////////////////////////update item/////////////////////////////
export const updateItemStart = () => {
  return {
    type: actionTypes.UPDATE_SELLING_ITEM_START,
  };
};

export const updateItemSuccess = (result) => {
  return {
    type: actionTypes.UPDATE_SELLING_ITEM_SUCCESS,
    result: result.result,
  };
};

export const updateItemFail = (err) => {
  return {
    type: actionTypes.UPDATE_SELLING_ITEM_FAIL,
    error: err.message,
  };
};

export const updateItem = (item) => {
  console.log(item);

  const data = new FormData();

  if (item.files) {
    item.files.map((file, index) => {
      data.append("file", file);
    });
  }

  if (item.fileUrls.length > 1) {
    item.fileUrls.map((file) => {
      data.append("fileUrls", file);
    });
  } else {
    console.log(item.fileUrls);

    data.append("fileUrls", item.fileUrls);
  }
  data.append("id", item.id);
  data.append("title", item.title);
  data.append("price", item.price);
  data.append("category", item.category);
  data.append("subCategory", item.subCategory);
  data.append("condition", item.condition);
  data.append("description", item.description);
  data.append("sellingArea", item.sellingArea);
  data.append("quantity", item.quantity);
  data.append("shippingFee", item.shippingFee);

  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(updateItemStart());
    axios
      .post("/shop/update-item", data, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((result) => {
        dispatch(updateItemSuccess(result.data));
      })
      .catch((err) => {
        dispatch(updateItemFail(err));
      });
  };
};

////////////////////////////////////////////SELLING REGISTER/////////////////
export const sellingRegStart = () => {
  return {
    type: actionTypes.SELLING_REGISTER_START,
  };
};

export const sellingRegSuccess = (detail) => {
  return {
    type: actionTypes.SELLING_REGISTER_SUCCESS,
    detail: detail,
  };
};

export const sellingRegFail = (error) => {
  return {
    type: actionTypes.SELLING_REGISTER_FAIL,
    error: error,
  };
};

export const sellingRegister = (data) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(sellingRegStart());
    axios
      .post("seller/selling-register", data, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((result) => {
        dispatch(sellingRegSuccess(result.data));
      })
      .catch((err) => {
        dispatch(sellingRegFail(err.message));
      });
  };
};
