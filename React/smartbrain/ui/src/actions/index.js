import axios from 'axios';
import { SET_USER, SET_IMAGE_URL, UPDATE_USER_ENTRIES, UNSET_USER, UNSET_IMAGE, SET_POSTED_IMAGES, SET_IMAGE_ANALYSIS_RESULTS, SET_ERROR_MESSAGE } from './types';
import setAuthHeader from '../utils/setAuthHeader';
import history from '../history';

export const setImageUrl = (url) => {
    return {
        type: SET_IMAGE_URL,
        payload: url
    }
};

export const calculateFaceLocations = (data, imgElement) => {
    return data.outputs[0].data.regions.map(face => {
        const clarifaiFace = face.region_info.bounding_box;
        const width = Number(imgElement.width);
        const height = Number(imgElement.height);
        return {
            id: face.id,
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    });
}

export const getImageRecognitionResults = url => async dispatch => {
    try {
        const { data } = await axios.post('/image', { url });
        dispatch({
            type: SET_IMAGE_ANALYSIS_RESULTS,
            payload: data.image_analysis_results
        });

        dispatch({
            type: UPDATE_USER_ENTRIES,
            payload: data.entries
        })
    }
    catch (e) {
        console.log(e);
    }
};

const fetchUser = async (id, dispatch) => {
    try {
        const { data } = await axios.get(`/profile/${id}`);
        if (data) {
            dispatch({
                type: SET_USER,
                payload: data
            });
        }
    }
    catch (e) {
        dispatch({ type: UNSET_USER });
        window.sessionStorage.removeItem('token');
        history.push('/signin');
    }
};

export const setUser = (id) => async dispatch => fetchUser(id, dispatch);

const handleAuthRedirect = (data, dispatch) => {
    window.sessionStorage.setItem('token', data.token);
    setAuthHeader(data.token);
    fetchUser(data.userId, dispatch);
    history.push('/');
};

export const signIn = (email, password) => async dispatch => {
    try {
        const { data } = await axios.post('/signin', { email, password });
        handleAuthRedirect(data, dispatch);
    }
    catch (e) {
        dispatch({
            type: SET_ERROR_MESSAGE,
            payload: e.response.data.error
        });
    }
};

export const signOut = () => dispatch => {
    window.sessionStorage.removeItem('token');
    dispatch({ type: UNSET_USER });
    dispatch({ type: UNSET_IMAGE });
};

export const register = (name, email, password) => async dispatch => {
    try {
        const { data } = await axios.post('/register', { email, password, name });
        handleAuthRedirect(data, dispatch);
    }
    catch (e) {
        console.log(e);
    }
};

export const fetchPostedImages = () => async dispatch => {
    const { data: images } = await axios.get('/images');
    dispatch({
        type: SET_POSTED_IMAGES,
        payload: images
    });
};