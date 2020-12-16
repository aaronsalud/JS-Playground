import React, { useState } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import axios from '../api/axios';

const KEY = 'AIzaSyDVLK79BFv0ybZ7E2FiAIv2nPupXilAuMc';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onSearchSubmit = async (term) => {
        const response = await axios.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0] );
    }

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    }

    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onFormSubmit={onSearchSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
                    </div>
                </div>
            </div>
        </div>
    );

}
export default App;