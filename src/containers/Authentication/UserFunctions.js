import axios from "axios";
import jwt_decode from "jwt-decode";

export const register = (userData) => {
  return axios.post("/user/register", userData).then((res) => {
    console.log("Registerd");
    console.log(res);
    return res.data;
  });
};


    

export const login = user =>{
    return axios
    .post('user/login',{
        email:user.email,
        password:user.password
    })
    .then(res=>{
        console.log("login");
        //console.log(res);
        //console.log(res.data);
        //console.log(user.password);
        //console.log(user.email);
      
        localStorage.setItem('user_id',res.data._id)

        console.log(res);
        return res.data
    })
    .catch(err=>{
        console.log(err)
    })
}

export const profile = userData => {
    return axios 
    .post("/user/profile",userData)
    .then(res=>{
        console.log('saved');
        console.log(res);
        return res.data
    })
    
}


    

