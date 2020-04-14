import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../Shared/Utility";

const initialState = {
  details: null,
  uploadedImages: [],
  loading: false,
  error: null,
  succeeded: false,
};

const addDetailsFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const addDetailsStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    succeeded: false,
  });
};

const addDetailsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    succeeded: true,
  });
};

// const setImages = (state, action) => {
//     return updateObject(state, {

//     })
// }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DETAILS_START:
      return addDetailsStart(state, action);
    case actionTypes.ADD_DETAILS_SUCCESS:
      return addDetailsSuccess(state, action);
    case actionTypes.ADD_DETAILS_FAIL:
      return addDetailsFail(state, action);
    // case actionTypes.SET_IMAGES:
    //   return setImages(state, action);
    default:
      return state;
  }
};

export default reducer;
