import { SET_ROBOTS } from '../actions/types';

const robotsReducer = (state = [], {type, payload}) => {
    switch (type) {
        case SET_ROBOTS:
            return [...payload];
        default:
            return state;
    }
};

export default robotsReducer;