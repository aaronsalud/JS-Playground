import { PROFILE_MODAL_TOGGLE } from '../actions/types';

const initialState = {
    isProfileModalOpen: false
};
const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_MODAL_TOGGLE:
            return { ...state, isProfileModalOpen: !state.isProfileModalOpen };
        default:
            return state;
    }
};
export default modalReducer;