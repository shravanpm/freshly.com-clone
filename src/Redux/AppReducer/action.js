import * as Types from "./actionTypes";
import axios from "axios";

export const getData = (params) => (dispatch) => {
  dispatch({ type: Types.GET_DATA_REQ });
  axios({
    url: "http://localhost:8080/foods",
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
