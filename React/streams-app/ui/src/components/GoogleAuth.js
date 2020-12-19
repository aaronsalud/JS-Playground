import React, { Component } from 'react';

class GoogleAuth extends Component {
    state = { isSignedIn: null };
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '731848874698-g0unv8i340gppcdg8r4v2lgp2m19eck6.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
            });
        });
    }
    render() {
        return (
            <div>GoogleAuth</div>
        );
    }
}

export default GoogleAuth;