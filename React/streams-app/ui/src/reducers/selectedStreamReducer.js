import { FETCH_STREAM } from '../actions/types';

const selectedStreamReducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_STREAM:
            return action.payload;
        default:
            return state;
    }
};

export default selectedStreamReducer;