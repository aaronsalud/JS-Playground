import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
import userReducer from './userReducer';
import profileReducer from './profileReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    user: userReducer,
    image: imageReducer,
    profile: profileReducer,
    error: errorReducer
});