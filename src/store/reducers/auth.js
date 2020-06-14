import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../Shared/Utility";

const initialState = {
  loading: false,
  islog:false
};

const authStart = (state, action) => {};

const authSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    islog:true,
  });
};

const authFail = (state, action) => {};

const authLogout = (state, action) => {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
