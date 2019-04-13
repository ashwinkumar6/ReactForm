import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import analyticalMethodReducer from "./reducers/analyticalMethodReducer";
import formDataReducer from "./reducers/formDataReducer";

const reducers = combineReducers ({
    analyticalMethodReducer,
    formDataReducer
})

const store = createStore(reducers, applyMiddleware(logger));

export default store;