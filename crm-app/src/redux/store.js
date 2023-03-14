import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import numberReducer from "./reducers/Register";

const store = createStore(numberReducer, applyMiddleware(thunk));

export default store;
