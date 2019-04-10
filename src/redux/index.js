import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import useReducer from "./reducers/userReducer";
import tweetsReducer from "./reducers/tweetsReducer";

const reducers = combineReducers ({
    user: useReducer,
    tweets : tweetsReducer
})

const store = createStore(reducers, applyMiddleware(logger));

// trial
// store.subscribe(() => {
//     console.log("store has changed", store.getState());
// })

// store.dispatch({ type: "CHANGE_NAME", payload: {name:"ashwin", tweet:"send out a name change tweet"} })
// store.dispatch({ type: "CHANGE_AGE", payload: {age:22, tweet:"send out a age change tweet"} })
// store.dispatch({ type: "CHANGE_AGE", payload: {age:25, tweet:"send out a age change tweet, yes again!!"} })

export default store;