import { useState, useEffect } from 'react';
import axios from '../api/axios';

const KEY = 'AIzaSyDVLK79BFv0ybZ7E2FiAIv2nPupXilAuMc';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        if(defaultSearchTerm){
            searchVideos(defaultSearchTerm);
        }
    }, [defaultSearchTerm]);

    const searchVideos = async (term) => {
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
        // setSelectedVideo(response.data.items[0] );
    };

    return [videos, searchVideos];
};

export default useVideos;