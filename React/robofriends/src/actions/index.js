import { CHANGE_SEARCH_FIELD } from './types';

export const setSearchField = searchTerm => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: searchTerm
    }
};