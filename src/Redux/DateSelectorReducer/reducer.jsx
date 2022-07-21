import * as types from "./actionTypes";
const initialState = {
    date: [],
    isLoading:false,
    isError:false
}

const reducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.GET_DATE_SELECTOR_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        case types.GET_DATE_SELECTOR_SUCCESS:
            return {
                ...state,
                date:payload,
                isLoading:false,
                isError:false
            }
        case types.GET_DATE_SELECTOR_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        default:
            return state;
    }
}
export {reducer};
    