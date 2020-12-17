import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'High Fashion', duration: '4:05' },
        { title: 'Fortress', duration: '3:10' },
        { title: 'Blueberry Faygo', duration: '5:09' },
        { title: 'Down Below', duration: '4:15' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});