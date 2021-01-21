import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
import userReducer from './userReducer';

export default combineReducers({
    user: userReducer,
    image: imageReducer
});