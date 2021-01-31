import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card } from 'reactstrap';
import ProfileHeader from './ProfileHeader';
import { fetchPostedImages } from '../../actions';

const ProfileSummary = ({ user, images, fetchPostedImages }) => {

    if (!user) {
        return <div>Loading...</div>
    }

    useEffect(() => {
        fetchPostedImages();
    }, []);

    const renderPostedImages = () => {
        return images.map((image) => {
            return (
                <Card key={image.id} className="w-30 px-2 py-2 m-2">
                    <img  src={image.url} alt="" />
                </Card>
            );
        });
    };

    return (
        <div className="profile">
            <ProfileHeader user={user} />
            <div className="images flex m-3">
                {renderPostedImages()}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user,
        images: state.profile.images || []
    }
};

export default connect(mapStateToProps, { fetchPostedImages })(ProfileSummary);