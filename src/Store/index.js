import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from '../reducers/index.js';

const middlewares = applyMiddleware(thunk.default);

const store = configureStore({
  reducer: allReducers,
  devTools: composeWithDevTools(middlewares),
});

export default store;
