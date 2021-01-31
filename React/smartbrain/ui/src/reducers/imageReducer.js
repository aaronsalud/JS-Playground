
import { SET_IMAGE_URL, SET_IMAGE_ANALYSIS_RESULTS, UNSET_IMAGE } from '../actions/types';

const initialState = {
    url: null,
    analysisResults: {}
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGE_URL:
            return { ...state, url: action.payload };
        case SET_IMAGE_ANALYSIS_RESULTS:
            return { ...state, analysisResults: action.payload };
        case UNSET_IMAGE:
            return { ...initialState };
        default:
            return state;
    }
};

export default imageReducer;