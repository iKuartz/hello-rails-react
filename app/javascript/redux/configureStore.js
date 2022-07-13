import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingReducer from './Greeting';

const rootReducer = combineReducers({
  greetingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
