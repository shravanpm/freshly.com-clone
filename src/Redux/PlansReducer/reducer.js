import * as types from "./actionTypes";
const initialState = {
    plans: [],
    isLoading: false,
    isError: false,
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_PLANS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case types.GET_PLANS_SUCCESS:
           
            return {
                ...state,
                plans: payload,
                isLoading: false,
                isError: false
            }
        case types.GET_PLANS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state;
    }
}
export { reducer };