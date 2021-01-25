import axios from 'axios';
import { SET_USER, SET_IMAGE_URL, SET_IMAGE_BOXES, UPDATE_USER_ENTRIES, UNSET_USER, PROFILE_MODAL_TOGGLE } from './types';
import setAuthHeader from '../utils/setAuthHeader';
import history from '../history';

export const setImageUrl = (url) => {
    return {
        type: SET_IMAGE_URL,
        payload: url
    }
};

const calculateFaceLocations = (data) => {
    return data.outputs[0].data.regions.map(face => {
        const clarifaiFace = face.region_info.bounding_box;
        const image = document.getElementById('inputimage');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            id: face.id,
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    });
}

const updateUserEntries = async id => {
    const { data } = await axios.put('/image', { id });
    return data;
};

export const getImageRecognitionResults = (url) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post('/imageurl', { input: url });
        const state = getState();
        const userId = state.user.id;
        dispatch({
            type: SET_IMAGE_BOXES,
            payload: calculateFaceLocations(data)
        });

        const updatedEntries = await updateUserEntries(userId);
        dispatch({
            type: UPDATE_USER_ENTRIES,
            payload: updatedEntries
        });
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

export const setUser = (id) => async dispatch => {
    fetchUser(id, dispatch);
}

export const signIn = (email, password) => async dispatch => {
    try {
        const { data } = await axios.post('/signin', { email, password });
        window.sessionStorage.setItem('token', data.token);
        setAuthHeader(data.token);
        fetchUser(data.userId, dispatch);
        history.push('/');
    }
    catch (e) {
        console.log(e);
    }
};

export const signOut = () => {
    window.sessionStorage.removeItem('token');
    return {
        type: UNSET_USER
    }
};

export const toggleProfileModal = () => {
    return {
        type: PROFILE_MODAL_TOGGLE
    }
}

