import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from 'reducers';
import asyncMiddleware from 'middlewares/asyncMiddleware';
import stateValidator from 'middlewares/stateValidator';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const root = ({ children, initialState = {} }) => {
    const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(asyncMiddleware, stateValidator)));
    return <Provider store={store}>{children}</Provider>;
};

export default root;
