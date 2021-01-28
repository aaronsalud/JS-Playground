import React from 'react';
import Logo from '../Logo/Logo';
import { Card } from 'reactstrap';
import { connect } from 'react-redux';

const ProfileSummary = ({ user }) => {

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <div className="profile flex">
            <Logo />
            <Card className="br3 ba b--black-10 w-80 mw8 shadow-5 center mr-4">
                <main className="pa4 black-80 flex">
                    <div className="w-50">
                        <img src={user.profile_image} className="br-100 ba h3 w3 dib" alt="avatar" />
                        <h1>{user.name}</h1>
                    </div>
                    <div className="w-50 py-5">
                        <h4>{`Images Submitted: ${user.entries}`}</h4>
                        <p>{`Member Since: ${new Date(user.joined).toLocaleDateString()}`}</p>
                    </div>
                </main>
            </Card>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps)(ProfileSummary);