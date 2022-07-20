import * as types from "./actionTypes";
import axios from "axios";

const getPlans = () => (dispatch) => {
    dispatch({
        type: types.GET_PLANS_REQUEST
    })
  
    axios
        .get("/plans")
        .then((r) =>
            dispatch({
                type: types.GET_PLANS_SUCCESS,
                payload: r.data
            }))
        .catch((e) =>
            dispatch({
                type: types.GET_PLANS_FAILURE
            }))


}
export { getPlans }


