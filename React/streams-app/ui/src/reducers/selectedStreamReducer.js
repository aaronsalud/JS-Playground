import { FETCH_STREAM, CLEAR_SELECTED_STREAM } from '../actions/types';

const selectedStreamReducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_STREAM:
            return action.payload;
        case CLEAR_SELECTED_STREAM:
            return null;
        default:
            return state;
    }
};

export default selectedStreamReducer;