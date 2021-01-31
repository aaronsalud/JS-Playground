import { SET_POSTED_IMAGES, UNSET_POSTED_IMAGES } from '../actions/types';

const initialState = {
    images: []
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTED_IMAGES:
            return action.payload;
        case UNSET_POSTED_IMAGES:
            return { ...initialState };
        default:
            return state;
    }
};

export default profileReducer;