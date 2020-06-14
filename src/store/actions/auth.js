import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authSuccess = () => {
    return {
      type: actionTypes.AUTH_SUCCESS
    };
  };