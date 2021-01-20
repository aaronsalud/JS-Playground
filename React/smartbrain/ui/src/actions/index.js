import axios from 'axios';
import { SET_USER } from './types';
import setAuthHeader from '../utils/setAuthHeader';
import history from '../history';

export const fetchUser = async id => {
    try {
        const { data } = await axios.get(`/profile/${id}`);
        if (data) {
            return {
                type: SET_USER,
                payload: data
            };
        }
    }
    catch (e) {
        console.log(e);
    }
};

export const setUser = (id) => async dispatch => {
    dispatch(await fetchUser(id));
}

export const signIn = (email, password) => async dispatch => {
    try {
        const { data } = await axios.post('/signin', { email, password });
        window.sessionStorage.setItem('token', data.token);
        setAuthHeader(data.token);
        dispatch(await fetchUser(data.userId));
        history.push('/');
    }
    catch (e) {
        console.log(e);
    }
};

