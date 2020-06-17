
import {returnErrors} from './errorActions';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS
}
from "./actionTypes";

import axios from 'axios';

//check token and load user
export const loadUser = () =>(dispatch,getState) =>{
    //user loading
    dispatch({type:USER_LOADING});

     //get token from localstorage
     
    axios.get('/auth/user',tokenConfig(getState))
    .then(res => dispatch({
        type:USER_LOADED,
        payload:res.data
    }))
    .catch(err =>{
        dispatch(returnErrors(err.response.data,err.response.status));
        dispatch({
            type:AUTH_ERROR
        });
    });
};


//Register user
export const register = ({first_name,last_name,email,password}) => dispatch =>{
  //headers
    const config  = {
        headers:{
        'Content-Type' :'application/json'
    } }
    //Request body
    const body = JSON.stringify({first_name,last_name,email,password});

    axios.post('/user/register',body,config)
    .then(res=> dispatch ({
        type :REGISTER_SUCCESS,
        payload : res.data

    }))
    .catch(err=> {
        dispatch(returnErrors(err.response.data,err.response.status,'REGISTER_FAIL'));

        dispatch({
            type:REGISTER_FAIL
        });
    });
}

//login user
export const login = ({email,password}) => dispatch =>{
    //headers
      const config  = {
          headers:{
          'Content-Type' :'application/json'
      } }
      //Request body
      const body = JSON.stringify({email,password});
  
      axios.post('/user/login',body,config)
      .then(res=> dispatch ({
          type :LOGIN_SUCCESS,
          payload : res.data
            
      })
      )
      .catch(err=> {
          dispatch(returnErrors(err.response.data,err.response.status,'LOGIN_FAIL'));
  
          dispatch({
              type:LOGIN_FAIL
          });
      });
  }
  



//logout user

export const logout=()=>{
    return{
        type:LOGOUT_SUCCESS
    };
};
//setup config/header in token
export const tokenConfig= getState =>{
    const token = getState().auth.token;

     //headers

     const config ={
         headers:{
             "Content-type":"application/json"
         }
     }

     if(token){
         config.headers['x-auth-token'] = token;

     }

     return config;
}

