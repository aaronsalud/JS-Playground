import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuth = (ChildComponent) => {
    class ComposedComponent extends Component {

        componentDidMount() {
            this.navigateAway();
        }

        componentDidUpdate() {
            this.navigateAway();
        }

        navigateAway() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props}/>
        }
    }
    const mapStateToProps = (state) => {
        return { auth: state.isLoggedIn }
    }

    return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;