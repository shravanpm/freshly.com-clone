import * as types from "./actionTypes";
const initialState = {
    date: [],
    isLoading:false,
    isError:false,
    selectedDate:""
}

const reducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.GET_DATE_SELECTOR_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false,
                selectedDate:""
            }
        case types.GET_DATE_SELECTOR_SUCCESS:
            return {
                ...state,
                date:payload,
                isLoading:false,
                isError:false,
                selectedDate:""

            }
        case types.GET_DATE_SELECTOR_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true,
                selectedDate:""
            }
        case types.POST_DATE_SELECTOR_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false,
                selectedDate:""
            }
        case types.POST_DATE_SELECTOR_SUCCESS:
         
            return {
                ...state,
                isLoading:false,
                isError:false,
                selectedDate:payload
                
            }
            
        case types.POST_DATE_SELECTOR_FAILURE:
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
    