import React from 'react';
import { connect } from 'react-redux';
import Logo from './Logo/Logo';
import Rank from './Rank';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import FaceRecognition from './FaceRecognition/FaceRecognition';

const Dashboard = ({ user, imageUrl, boxes }) => {

    if (!user) {
        return <div></div>;
    }

    const { name, entries } = user;
    return (
        <div>
            <Logo />
            <Rank name={name} entries={entries} />
            <ImageLinkForm />
            <FaceRecognition imageUrl={imageUrl} boxes={boxes}/>
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

export default connect(mapStateToProps)(Dashboard);