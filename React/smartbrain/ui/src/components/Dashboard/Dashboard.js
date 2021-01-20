import React from 'react';
import { connect } from 'react-redux';
import Logo from './Logo/Logo';
import Rank from './Rank';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import FaceRecognition from './FaceRecognition/FaceRecognition';

const Dashboard = (props) => {
    const { name, entries } = props.user;

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