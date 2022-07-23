import * as types from "./actionTypes";
import axios from "axios";

const getDate = () => (dispatch) => {
  dispatch({
    type: types.GET_DATE_SELECTOR_REQUEST,
  });
  axios
    .get("/dates")
    .then((res) => {
      dispatch({
        type: types.GET_DATE_SELECTOR_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_DATE_SELECTOR_FAILURE,
        payload: err,
      });
    });
};

export { getDate };
