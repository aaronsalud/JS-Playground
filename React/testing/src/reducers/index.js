import { combineReducers } from 'redux';
import commentReducer from 'reducers/commentReducer';

export default combineReducers({
    'comments': commentReducer
});