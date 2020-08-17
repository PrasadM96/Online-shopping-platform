/*import { GET_ADMIN_STATUS } from "./actionTypes";

import axios from "axios";

<<<<<<< HEAD
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
         
=======
export const getAdmin = () => {
  const token = localStorage.getItem("token");
  console.log("get admin");
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
>>>>>>> e66259b6ca06093626fe7d9f61e4da1ffd02aef5
        });
      })
      .catch((err) => {});
  };
};
*/