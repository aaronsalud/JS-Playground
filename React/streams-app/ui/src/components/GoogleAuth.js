import React, { Component } from 'react';

class GoogleAuth extends Component {
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
               clientId: '731848874698-g0unv8i340gppcdg8r4v2lgp2m19eck6.apps.googleusercontent.com',
               scope: 'email' 
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