import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import logger from "redux-logger";
import combineReducers from "./root-reducer";
import rootSaga from './root.sagas'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

const store = createStore(combineReducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga)

export default store;
