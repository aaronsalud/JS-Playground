const asyncMiddleware = ({ dispatch }) => next => action => {
    // Check to see if the action has a promise on its payload property
    // If it contains a promise wait for it to resolve or else send the action to the next middleware
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    // We wait for the promise to resolve and create a new action with the data and dispatch it
    action.payload.then((response) => {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });
};

export default asyncMiddleware;