import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Please Select a Song</div>;
    }

    return (
        <div>
            <h3>Details For:</h3>
            <p>
                <b>Title:</b> {song.title} <br />
                <b>Duration:</b> {song.duration}
            </p>
        </div>
    );
};

const mapStateToProps = ({ selectedSong }) => {
    return { song: selectedSong };
}

export default connect(mapStateToProps)(SongDetail);