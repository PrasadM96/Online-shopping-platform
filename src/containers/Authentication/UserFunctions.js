import axios from "axios";
import jwt_decode from "jwt-decode";

export const register = (userData) => {
  return axios.post("/user/register", userData).then((res) => {
    console.log("Registerd");
    console.log(res);
    return res.data;
  });
};
export const login = (user) => {
  return axios
    .post("user/login", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      console.log("login");
      console.log(res._id);
      console.log(res.data);
      console.log(user.password);
      console.log(user.email);

      //   localStorage.setItem('usertoken',res.data)
      //console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
