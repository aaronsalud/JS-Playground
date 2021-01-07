import { CHANGE_SEARCH_TERM } from './types';

export const setSearchTerm = searchTerm => {
    return {
        type: CHANGE_SEARCH_TERM,
        payload: searchTerm
    }
};