import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import Reducer from "./Reducer";

const rootReducer = combineReducers({ Reducer });
const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
