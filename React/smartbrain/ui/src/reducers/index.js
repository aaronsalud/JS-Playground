import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
import userReducer from './userReducer';
import profileReducer from './profileReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    user: userReducer,
    image: imageReducer,
    modal: modalReducer,
    profile: profileReducer
});