import axios from 'axios';
import { AUTH_ERROR, AUTH_USER } from './types';

export const signUp = ({ email, password }, redirect) => async dispatch => {
    try {
        const response = await axios.post('/signup', { email, password });
        dispatch({
            type: AUTH_USER,
            payload: response.data.token
        });
        localStorage.setItem('token', response.data.token);
        redirect();
    }
    catch (e) {
        const errorMessage = e.response.data.error;
        dispatch({
            type: AUTH_ERROR,
            payload: errorMessage
        })
    }
};

export const signIn = ({ email, password }, redirect) => async dispatch => {
    try {
        const response = await axios.post('/signin', { email, password });
        dispatch({
            type: AUTH_USER,
            payload: response.data.token
        });
        localStorage.setItem('token', response.data.token);
        redirect();
    }
    catch (e) {
        const errorMessage = e.response.data.error;
        dispatch({
            type: AUTH_ERROR,
            payload: errorMessage
        })
    }
};

export const signOut = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    }
} 