import axios from '../api/axios';
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM, FETCH_STREAMS, FETCH_STREAM } from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};

export const fetchStreams = () => async dispatch => {
    const response = await axios.get('streams');
    dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const createStream = formValues => async dispatch => {
    const response = await axios.post('/streams', formValues);
    dispatch({ type: CREATE_STREAM, payload: response.data });
};
