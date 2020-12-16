import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
    return(
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt=""/>
            <div className="content">
              <p className="header">{video.snippet.title}</p>  
            </div>
            
        </div>
    );
};

export default VideoItem;