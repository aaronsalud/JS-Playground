import { CHANGE_SEARCH_TERM } from '../actions/types';

const searchTermReducer = (state = '', action) => {
    switch (action.type) {
        case CHANGE_SEARCH_TERM:
            return action.payload;
        default:
            return state;
    }
};

export default searchTermReducer;


