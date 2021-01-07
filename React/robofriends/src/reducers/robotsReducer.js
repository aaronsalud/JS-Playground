import { SET_ROBOTS } from '../actions/types';

const robotsReducer = (state = [], action) => {
    switch (action.type) {
        case SET_ROBOTS:
            return [...action.payload];
        default:
            return state;
    }
};

export default robotsReducer;