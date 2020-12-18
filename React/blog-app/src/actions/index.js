import axios from '../api/axios';

export const fetchPosts = () => async dispatch => {
    const response = await axios.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};
