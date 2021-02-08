import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import reduxPromise from 'redux-promise';
import reducers from './reducers'

// custom middlewares
import getRates from './middleware/getRates';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
      reduxPromise,
      getRates
    ),
  );

export default ({ children, initialState = {} }) => {
    
    const store = createStore(reducers, initialState, enhancers)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}