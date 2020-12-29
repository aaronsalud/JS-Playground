import { ADD_COMMENT } from 'actions/types';

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}