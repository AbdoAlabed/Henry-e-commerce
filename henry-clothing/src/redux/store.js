import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import combineReducers from "./root-reducer";

const middlewares = [];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

const store = createStore(combineReducers, applyMiddleware(...middlewares));

export default store;
