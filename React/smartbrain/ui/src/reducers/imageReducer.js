
import { SET_IMAGE_URL, SET_IMAGE_BOXES } from '../actions/types';

const initialState = {
    url: null,
    boxes: []
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGE_URL:
            return { ...state, url: action.payload };
        case SET_IMAGE_BOXES:
            return { ...state, boxes: action.payload };
        default:
            return state;
    }
};

export default imageReducer;