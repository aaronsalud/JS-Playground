import { SET_USER, UNSET_USER, UPDATE_USER_ENTRIES } from '../actions/types';

const userReducer = (state = null, action) => {
    switch (action.type) {
        case SET_USER:
            return action.payload;
        case UPDATE_USER_ENTRIES:
            return { ...state, entries: action.payload };
        case UNSET_USER:
            return null;
        default:
            return state;
    }
}

export default userReducer;