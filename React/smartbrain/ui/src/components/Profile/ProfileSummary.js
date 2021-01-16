import React from 'react';

const ProfileSummary = ({user}) => {
    return (
        <div className="profile">
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                <img src="http://tachyons.io/img/logo.jpg" className="br-100 ba h3 w3 dib" alt="avatar" />
                <h1>{user.name}</h1>
                <h4>{`Images Submitted: ${user.entries}`}</h4>
                <p>{`Member Since: ${new Date(user.joined).toLocaleDateString()}`}</p>
                <hr/>    
                </main>
            </article>
        </div>
    );
}

export default ProfileSummary;