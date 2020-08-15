import { GET_ADMIN_STATUS } from "./actionTypes";

import axios from "axios";

export const getAdmin = () => {
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