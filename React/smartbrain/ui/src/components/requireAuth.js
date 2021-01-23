import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';

const requireAuth = (ChildComponent) => {
    class ComposedComponent extends Component {

        componentDidUpdate() {
            this.navigateAway();
        }

        navigateAway() {
            if (!this.props.auth) {
                history.push('/signin');
            }
        }

        render() {
            return <ChildComponent {...this.props} />
        }
    }
    const mapStateToProps = (state) => {
        return { auth: state.user ? true : false }
    }

    return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;