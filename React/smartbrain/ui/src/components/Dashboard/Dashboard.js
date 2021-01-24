import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import Logo from './Logo/Logo';
import Rank from './Rank';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import FaceRecognition from './FaceRecognition/FaceRecognition';
import ProfileSummary from '../Profile/ProfileSummary';
import { setImageUrl, getImageRecognitionResults, toggleProfileModal } from '../../actions';
import requireAuth from '../requireAuth';

const Dashboard = ({ user, imageUrl, boxes, setImageUrl, getImageRecognitionResults, isProfileModalOpen, toggleProfileModal }) => {

    if (!user) {
        return <div></div>;
    }

    const { name, entries } = user;

    return (
        <div>
            <Logo />
            <Rank name={name} entries={entries} />
            <ImageLinkForm setImageUrl={setImageUrl} getImageRecognitionResults={getImageRecognitionResults} />
            <FaceRecognition imageUrl={imageUrl} boxes={boxes} />

            <Modal isOpen={isProfileModalOpen} toggle={toggleProfileModal} backdrop={true} keyboard={true}>
                <ModalHeader toggle={toggleProfileModal}>Profile Summary</ModalHeader>
                <ModalBody>
                    <ProfileSummary user={user} />
                </ModalBody>
            </Modal>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        imageUrl: state.image.url,
        boxes: state.image.boxes,
        isProfileModalOpen: state.modal.isProfileModalOpen
    }
}

export default connect(mapStateToProps, { setImageUrl, getImageRecognitionResults, toggleProfileModal })(requireAuth(Dashboard));