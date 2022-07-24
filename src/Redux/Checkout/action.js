import * as types from "./actionTypes";
export const addUserData = (payload) => (dispatch) => {
  console.log(payload);
  dispatch({ type: types.ADD_USER, payload });
};
