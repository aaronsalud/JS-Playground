import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

const root = ({children, initialState = {}}) => {
    return <Provider store={createStore(reducers, initialState, composeEnhancers(applyMiddleware()))}>{children}</Provider>;
};

export default root;
