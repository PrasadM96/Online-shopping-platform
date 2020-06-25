import axios from "axios";
import jwt_decode from "jwt-decode";

export const profile = (userData) => {
  return axios.post("/user/profile", userData).then((res) => {
    console.log("saved");
    console.log(res);
    return res.data;
  });
};
