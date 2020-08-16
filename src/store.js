import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

import authReducer from "./store/reducers/authReducer";
import productsReducer from "./store/reducers/products";
import errorReducer from "./store/reducers/errorReducer";
import shopReducer from "./store/reducers/shop";
import modalReducer from "./store/reducers/modalReducer";
import cartReducer from "./store/reducers/cart";
import adminReducer from "./store/reducers/admin";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  shop: shopReducer,
  error: errorReducer,
  modal: modalReducer,
  cart: cartReducer,
  admin: adminReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
