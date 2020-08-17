import { returnErrors } from "./errorActions";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  GET_ADMIN_STATUS
} from "./actionTypes";

import axios from "axios";

//check token and load user
export const loadUser = () => (dispatch, getState) => {
  //user loading
  dispatch({ type: USER_LOADING });

  //get token from localstorage

  axios
    .get("/auth/user", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

//Register user
export const register = ({ first_name, last_name, email, password }) => (
  dispatch
) => {
  //headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //Request body
  const body = JSON.stringify({ first_name, last_name, email, password });

  axios
    .post("/user/register", body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );

      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

export const authSuccess = (res) => {
  return {
    type: LOGIN_SUCCESS,
    payload: res,
  };
};

//logout user

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const checkAuthTimeout = (expiresIn) => {
  console.log(expiresIn);
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expiresIn * 1000);
  };
};




//login user
export const login = ({ email, password }) => (dispatch) => {
  //headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //Request body
  const body = JSON.stringify({ email, password });

  axios
    .post("/user/login", body, config)
    .then(
      (
        res /////
      ) => {
        console.log(res.data);
        dispatch(authSuccess(res.data));
        const expirationDate = new Date(
          new Date().getTime() + res.data.user.expiresIn * 1000
        );
        localStorage.setItem("expiresIn", expirationDate);
        dispatch(checkAuthTimeout(parseInt(res.data.user.expiresIn)));
      }
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

//setup config/header in token
export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  //headers

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const expireDate = new Date(localStorage.getItem("expiresIn"));

    if (!token) {
      dispatch(logout());
    } else {
      if (expireDate <= new Date()) {
        dispatch(logout());
      } else {
        const first_name = localStorage.getItem("first_name");
        const id = localStorage.getItem("user_id");
        const expiresIn = localStorage.getItem("expiresIn");

        dispatch(
          authSuccess({
            token,
            user: {
              id: id,
              first_name: first_name,
              // last_name: user.last_name,
              // email: user.email,
              expiresIn: expiresIn,
            },
          })
        );
        console.log(expireDate);
        console.log(new Date());

        dispatch(
          checkAuthTimeout((expireDate.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
};


export const getAdmin= () => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    
axios
      .get("/user/checkAdminStatus", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((results) => {
          dispatch({
              type: GET_ADMIN_STATUS,
              payload: results.data,
            })
      })
      .catch((err) => {
       
      });
  };
};
