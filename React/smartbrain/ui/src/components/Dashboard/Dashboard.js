import React from 'react';
import { connect } from 'react-redux';

import Logo from '../Logo/Logo';
import Rank from './Rank';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import FaceRecognition from './FaceRecognition/FaceRecognition';
import { setImageUrl, getImageRecognitionResults, onError, clearImage } from '../../actions';
import requireAuth from '../requireAuth';

const Dashboard = ({ user, url, analysisResults, setImageUrl, onError, clearImage, getImageRecognitionResults }) => {

    const { name, entries } = user;

    return (
        <div>
            <Logo />
            <Rank name={name} entries={entries} />
            <ImageLinkForm setImageUrl={setImageUrl} getImageRecognitionResults={getImageRecognitionResults} onError={onError} clearImage={clearImage}/>
            <FaceRecognition url={url} analysisResults={analysisResults} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user || {},
        url: state.image.url,
        analysisResults: state.image.analysisResults
    }
}

export default connect(mapStateToProps, { setImageUrl, onError, clearImage, getImageRecognitionResults })(requireAuth(Dashboard));