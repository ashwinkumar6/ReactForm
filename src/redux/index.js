import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import useReducer from "./reducers/userReducer";
import analyticalMethodReducer from "./reducers/analyticalMethodReducer";

const reducers = combineReducers ({
    useReducer,
    analyticalMethodReducer
})

const store = createStore(reducers, applyMiddleware(logger));

export default store;