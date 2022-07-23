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


    const postDate = (date)=>(dispatch)=>{
       
      dispatch({type:types.POST_DATE_SELECTOR_SUCCESS,payload:date})
    }

    

export {getDate,postDate};
        

// export {getDate,postDate};

  

