import * as actionTypes from "./actionTypes";
import axios from "axios";

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
      .post("http://localhost:5000/shop/post-product", item)
      .then((response) => {
        dispatch(postSuccess());
      })
      .catch((error) => {
        dispatch(postFail());
      });
  };
};
