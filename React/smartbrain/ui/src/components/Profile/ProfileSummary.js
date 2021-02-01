import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Card, Modal, ModalBody, ModalHeader } from 'reactstrap';
import ProfileHeader from './ProfileHeader';
import FaceRecognition from '../Dashboard/FaceRecognition/FaceRecognition';
import { fetchPostedImages } from '../../actions';

const ProfileSummary = ({ user, images, fetchPostedImages }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeImage, setActiveImage] = useState({ url: "", analysisResults: {} });
    const [facesFound, setFacesFound] = useState(0);

    useEffect(() => {
        fetchPostedImages();
    }, []);

    const renderPostedImages = () => {
        return images.map(image => {
            return (
                <Card onClick={() => viewImage(image)} key={image.id} className="w-30 px-2 py-2 m-2" style={{ cursor: 'pointer' }}>
                    <img src={image.url} alt="" />
                </Card>
            );
        });
    };

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const viewImage = image => {
        const { url, analysis_results } = image;
        setActiveImage({ url, analysisResults: analysis_results });
        setFacesFound(analysis_results.outputs[0].data.regions.length);
        toggleModal();
    };

    return (
        <div className="profile">
            <ProfileHeader user={user} />
            <div className="images flex m-3">
                {renderPostedImages()}
            </div>
            <Modal isOpen={isModalOpen} toggle={toggleModal} backdrop={true} keyboard={true}>
                <ModalHeader toggle={toggleModal}>{`${facesFound} faces detected in this image`}</ModalHeader>
                <ModalBody>
                    <div>
                        <FaceRecognition url={activeImage.url} analysisResults={activeImage.analysisResults} />
                    </div>
                </ModalBody>
            </Modal>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user || {},
        images: state.profile.images
    }
};

export default connect(mapStateToProps, { fetchPostedImages })(ProfileSummary);