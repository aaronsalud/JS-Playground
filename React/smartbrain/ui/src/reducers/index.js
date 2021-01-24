import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
import userReducer from './userReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    user: userReducer,
    image: imageReducer,
    modal: modalReducer
});