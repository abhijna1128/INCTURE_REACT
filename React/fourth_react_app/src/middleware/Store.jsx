import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import userReducer from './userReducer';

const Store = createStore(userReducer, applyMiddleware(thunk));

export default Store;
