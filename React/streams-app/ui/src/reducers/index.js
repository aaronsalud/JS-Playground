import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamsReducer from './streamsReducer';
import selectedStreamReducer from './selectedStreamReducer'

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamsReducer,
    selectedStream: selectedStreamReducer
});