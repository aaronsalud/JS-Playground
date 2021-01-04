import axios from 'axios';
import { AUTH_USER } from './types';

export const signUp = ({ email, password }) => async dispatch => {
    const response = await axios.post('/signup', { email, password });

    dispatch({
        action: AUTH_USER,
        payload: response.data.token
    });
};