import {GET_ADMIN_STATUS} from "../actions/actionTypes";

const initialState = {
    isAdmin:false
}

export default function (state =initialState, action) {
    switch (action.type) {
    case GET_ADMIN_STATUS:
        if (action.payload) {
            console.log(action.payload);}
        //localStorage.setItem("admin",action.payload.status.status)}
      return {
        ...state,
        isAdmin: action.payload.status.status,
      };

      default: {
        return state;
      }

    }
}