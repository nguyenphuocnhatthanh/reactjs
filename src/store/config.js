import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const middlewares = [thunk]

const store = createStore(rootReducers, undefined, applyMiddleware(...middlewares));

export { store }
