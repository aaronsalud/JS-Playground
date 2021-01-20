import React from 'react';
import Logo from './Logo/Logo';
import Rank from './Rank';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import FaceRecognition from './FaceRecognition/FaceRecognition';

const Dashboard = (props) => {

    return (
        <div>
            <Logo />
            <Rank
                // name={this.state.user.name}
                // entries={this.state.user.entries}
            />
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

export default Dashboard;