import {
    GET_MODAL_STATE
}
from "../actions/actionTypes";

const initialState =  {
    modal : false,
    
  }

  export default function(state=initialState,action){
    switch(action.type){
        case GET_MODAL_STATE:
            return{
                ...state,
                modal : !state.modal
            };
        
            default:{
                return state;
            }

    }

  }