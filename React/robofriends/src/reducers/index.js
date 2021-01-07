import { combineReducers } from 'redux';
import searchTermReducer from './searchTermReducer';

export default combineReducers({
    searchTerm: searchTermReducer
});