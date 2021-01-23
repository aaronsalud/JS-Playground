import React from 'react';
import { connect } from 'react-redux';

import Logo from './Logo/Logo';
import Rank from './Rank';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import FaceRecognition from './FaceRecognition/FaceRecognition';
import { setImageUrl, getImageRecognitionResults } from '../../actions';
import requireAuth from '../requireAuth';

const Dashboard = ({ user, imageUrl, boxes, setImageUrl, getImageRecognitionResults }) => {

    if (!user) {
        return <div></div>;
    }

    const { name, entries } = user;
    return (
        <div>
            <Logo />
            <Rank name={name} entries={entries} />
            <ImageLinkForm setImageUrl={setImageUrl} getImageRecognitionResults={getImageRecognitionResults}/>
            <FaceRecognition imageUrl={imageUrl} boxes={boxes} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        imageUrl: state.image.url,
        boxes: state.image.boxes
    }
}

export default connect(mapStateToProps, { setImageUrl, getImageRecognitionResults })(requireAuth(Dashboard));