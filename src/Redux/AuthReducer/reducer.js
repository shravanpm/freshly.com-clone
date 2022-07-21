import * as types from "./actionTypes";

const initialState = {
    isAuth: false,
    token: "",
    isLoading: false,
    isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
       case types.REGISTER_REQUEST:{
        return {
               ...state,
               isLoading:true,
        }
       }
       case types.REGISTER_SUCCESS:{
        return {
               ...state,
               isLoading:false,
               isError:false
        }
       }
       case types.REGISTER_FAILURE:{
        return {
               ...state,
               isLoading:false,
               isError:true
        }
       }
       case types.LOGIN_REQUEST:{
        return {
               ...state,
               isLoading:true,
        }
       }
       case types.LOGIN_SUCCESS:{
        return {
               ...state,
               isAuth:true,
               token:payload,
               isLoading:false,
               isError:false
        }
       }
       case types.LOGIN_FAILURE:{
        return {
               ...state,
               isLoading:false,
               isError:true,
               isAuth:false,
               token:'',
        }
       }
    default:
      return state;
  }
};
