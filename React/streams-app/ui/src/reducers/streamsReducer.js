import { FETCH_STREAMS, CREATE_STREAM, DELETE_STREAM, EDIT_STREAM } from '../actions/types';

const streamsReducer = (state = [], action) => {

    switch (action.type) {
        case FETCH_STREAMS:
            return [...action.payload];

        case CREATE_STREAM:
            return [...state, action.payload];

        case EDIT_STREAM:
            const filteredStreams = state.filter((stream) => stream.id !== action.payload.id);
            return [...filteredStreams, action.payload];

        case DELETE_STREAM:
            return state.filter((stream) => stream.id !== action.payload);
            
        default:
            return state;
    }
};

export default streamsReducer;