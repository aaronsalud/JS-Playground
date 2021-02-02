import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';

const requireAuth = (ChildComponent) => {
    class ComposedComponent extends Component {
        componentDidMount() { this.navigateAway(); }
        componentDidUpdate() { this.navigateAway(); }
        navigateAway = () => { if (!this.props.auth) history.push('/signin'); }
        render() { return <ChildComponent {...this.props} /> }
    }
    const mapStateToProps = (state) => ({ auth: window.sessionStorage.getItem('token') ? true : false });
    return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;