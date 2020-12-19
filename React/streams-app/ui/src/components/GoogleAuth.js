import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '731848874698-g0unv8i340gppcdg8r4v2lgp2m19eck6.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        const userId = this.auth.currentUser.get().getId();
        isSignedIn ? this.props.signIn(userId) : this.props.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        }
        else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={() => this.auth.signOut()}>
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        }
        else {
            return (
                <button className="ui red google button" onClick={() => this.auth.signIn()}>
                    <i className="google icon"></i>
                    Sign In With Google
                </button>
            );
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);