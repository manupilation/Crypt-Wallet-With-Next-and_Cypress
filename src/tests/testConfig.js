import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom/extend-expect';

import reducer from '../reducers'

export const makeStore = (initialState = {}) => {
  return configureStore({
    reducer,
    preloadedState: initialState,
    devTools: applyMiddleware(thunk),
  })
};

export const renderWithStore = (component, state) => {
  const store = makeStore(state);
  const renderResult = render(
    <Provider store={store}>{component}</Provider>,
  );
  return {
    ...renderResult,
    store,
  };
};
