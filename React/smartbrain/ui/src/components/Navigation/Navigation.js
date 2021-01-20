import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileIcon from '../Profile/ProfileIcon';

const Navigation = ({ onRouteChange, isSignedIn, toggleProfileModal }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ProfileIcon onRouteChange={onRouteChange} toggleProfileModal={toggleProfileModal} />
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
    isSignedIn: state.user ? true : false
  }
}
export default connect(mapStateToProps)(Navigation);