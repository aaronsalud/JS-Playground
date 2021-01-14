import { combineReducers } from 'redux';
import searchTermReducer from './searchTermReducer';
import robotsReducer from './robotsReducer';

export default combineReducers({
    searchTerm: searchTermReducer,
    robots: robotsReducer
});