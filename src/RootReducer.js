import { combineReducers } from "redux";

import authReducer from "./store/reducers/auth";
import productsReducer from "./store/reducers/products";
import shopReducer from "./store/reducers/shop";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["shop", "products", "auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
