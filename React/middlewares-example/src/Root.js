import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from 'reducers';
import asyncMiddleware from 'middlewares/asyncMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const root = ({ children, initialState = {} }) => {
    const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(asyncMiddleware)));
    return <Provider store={store}>{children}</Provider>;
};

export default root;
