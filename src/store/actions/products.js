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

    console.log(item.quantity);
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
