import { ADD_COMMENT } from 'actions/types';

const commentsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default commentsReducer;