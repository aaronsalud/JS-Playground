import React from 'react';
import { connect } from 'react-redux';
import Logo from './Logo/Logo';
import Rank from './Rank';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import FaceRecognition from './FaceRecognition/FaceRecognition';
import history from '../../history';

const Dashboard = ({ user }) => {

    if (!user) {
        return <div></div>;
    }

    const { name, entries } = user;
    return (
        <div>
            <Logo />
            <Rank name={name} entries={entries} />
            <ImageLinkForm
            // onInputChange={this.onInputChange}
            // onButtonSubmit={this.onButtonSubmit}
            />
            {/* <FaceRecognition 
            boxes={boxes} imageUrl={imageUrl} 
            /> */}
        </div>
    );

};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Dashboard);