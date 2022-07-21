import * as types from "./actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DATA_REQ: {
      return {
        ...state,
        isLoading: true,
        isLoading: false,
      };
    }

    case types.GET_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
        isError: false,
      };
    }

    case types.GET_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    default:
      return state;
  }
};
