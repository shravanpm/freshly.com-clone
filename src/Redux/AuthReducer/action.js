

import axios from 'axios';
import * as types from './actionTypes';


export const registerRequest = () => ({
   type: types.REGISTER_REQUEST,
});

export const registerSuccess = (payload) => ({
   type: types.REGISTER_REQUEST,
   payload,
});

export const registerFailure = () => ({
   type: types.REGISTER_REQUEST,
});

export const Register = (payload) => (dispatch) => {
   dispatch(registerRequest());
   return axios.post('https://masai-api-mocker.herokuapp.com/auth/register', payload)
      .then((r) => {
         dispatch(registerSuccess(r.data))
         return types.REGISTER_SUCCESS
      })
      .catch(e => {
         dispatch(registerFailure())
         return types.REGISTER_FAILURE
      })
}