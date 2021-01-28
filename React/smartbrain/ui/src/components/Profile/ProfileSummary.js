import React from 'react';
import { Card } from 'reactstrap';
import { connect } from 'react-redux';

const ProfileSummary = ({ user }) => {

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <div className="profile">
            <Card className="br3 ba b--black-10 mv4 w-100 w-50-m mw8 w-25-l shadow-5 center">
                <main className="pa4 black-80">
                    <img src={user.profile_image} className="br-100 ba h3 w3 dib" alt="avatar" />
                    <h1>{user.name}</h1>
                    <h4>{`Images Submitted: ${user.entries}`}</h4>
                    <p>{`Member Since: ${new Date(user.joined).toLocaleDateString()}`}</p>
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