import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

const initializeStore = (initialState = null) => {
    // If there is an initialState (used for testing) provided generate the store with it
    return initialState ? createStore(reducers, initialState, composeEnhancers(applyMiddleware())) : createStore(reducers, composeEnhancers(applyMiddleware()));
};

const root = (props) => {
    return <Provider store={initializeStore(props.initialState)}>{props.children}</Provider>;
};

export default root;
