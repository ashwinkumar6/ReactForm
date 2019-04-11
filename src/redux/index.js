import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import analyticalMethodReducer from "./reducers/analyticalMethodReducer";

const reducers = combineReducers ({
    analyticalMethodReducer
})

const store = createStore(reducers, applyMiddleware(logger));

export default store;