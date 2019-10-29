
import rootEpic from './epics'
import rootReducer from './reducer'
import  { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createEpicMiddleware } from 'redux-observable';
const epicMiddleware = createEpicMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);
epicMiddleware.run(rootEpic);
export default  store;

