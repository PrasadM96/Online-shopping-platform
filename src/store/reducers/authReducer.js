import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isRegister: false,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };

    case LOGIN_SUCCESS:
      if (action.payload) {
        console.log(action.payload);
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("first_name", action.payload.user.first_name);
        localStorage.setItem("user_id", action.payload.user.id);
        localStorage.setItem("sellerStatus", action.payload.user.sellerStatus);
        console.log("rerererererrererere");
        // if (action.payload.user.sellerStatus === "true") {
        //   localStorage.setItem("sellerStatus", true);
        // } else {
        //   localStorage.setItem("sellerStatus", false);
        // }
      }
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        isRegister: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isRegister: true,
        isLoading: false,
      };

    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      localStorage.removeItem("first_name");
      localStorage.removeItem("expiresIn");

      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isRegister: false,
        isLoading: false,
      };

    case AUTH_ERROR:

    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        user: null,
        isRegister: false,
        isLoading: false,
        isAuthenticated: false,
      };

    default: {
      return state;
    }
  }
}
