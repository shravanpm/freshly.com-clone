import * as Types from "./actionTypes";
import axios from "axios";

export const getData = (params) => (dispatch) => {
  dispatch({ type: Types.GET_DATA_REQ });
  axios({
    url: "https://freshly-masai.herokuapp.com/foods",
    method: "GET",
    params: params,
  })
    .then((r) => {
      return dispatch({ type: Types.GET_DATA_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: Types.GET_DATA_FAILURE });
    });
};

export const addToCart = (payload) => (dispatch) => {
  dispatch({ type: Types.ADD_DATA_TO_CART_SUCCESS, payload });
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: Types.DELETE_DATA_FROM_CART, payload: id });
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: Types.CLEAR_CART_DATA });
};
