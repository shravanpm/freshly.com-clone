// NOTE: use this store variable to create a store.
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as auth } from "./AuthReducer/reducer";
import { reducer as appReducer } from "./AppReducer/reducer";

const rootReducer = combineReducers({ auth: auth, appReducer: appReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
