import { ADD_COMMENT, FETCH_COMMENTS } from 'actions/types';

const commentsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            const comments = action.payload.data.map(comment => comment.name);
            return [...state, ...comments];
        case ADD_COMMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default commentsReducer;