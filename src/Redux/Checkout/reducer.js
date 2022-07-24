import { getLocalData, saveLocalData } from "../../Utils/localStorage";
import * as types from "./actionTypes";

const initialState = {
  user: {},
  cart: {},
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_USER: {
      return {
        ...state,
        user: payload,
      };
    }
    case types.CART_DATA: {
      return {
        ...state,
        cart: payload,
      };
    }
    default:
      return state;
  }
};
