import axios from 'axios';
import { ADD_COMMENT, FETCH_COMMENTS } from 'actions/types';

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}

export const fetchComments = () => {
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');

    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}