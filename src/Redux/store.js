import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as appReducer } from "./AppReducer/reducer";
import { reducer as plansReducer } from "./PlansReducer/reducer";
import { reducer as dateReducer } from "./DateSelectorReducer/reducer";
import { reducer as checkoutReducer } from "./Checkout/reducer";

const rootReducer = combineReducers({
  authReducer,
  appReducer: appReducer,
  plansReducer: plansReducer,
  dateReducer: dateReducer,
  checkoutReducer: checkoutReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
