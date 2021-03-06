import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../actions';
import ProfileIcon from '../Profile/ProfileIcon';

const Navigation = ({ signOut, auth, userImage }) => {

  const onSignOut = () => {
    signOut();
  }

  if (auth) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ProfileIcon onSignOut={onSignOut} userImage={userImage}/>
      </nav>
    );
  }
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Link to="/signin" className='f3 link dim black underline pa3 pointer'>Sign In</Link>
      <Link to="/register" className='f3 link dim black underline pa3 pointer'>Register</Link>
    </nav>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.user ? true : false,
    userImage: state.user && state.user.profile_image
  }
}
export default connect(mapStateToProps, { signOut })(Navigation);