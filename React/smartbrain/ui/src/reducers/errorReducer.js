import { SET_ERROR_MESSAGE } from '../actions/types';

const initialState = {
    errorMessage: null
}
const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR_MESSAGE:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

export default errorReducer;