import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css';

class Header extends Component {

    renderLinks() {
        if (this.props.authenticated) {
            return (
                <Fragment>
                    <Link to="/signout">Sign Out</Link>
                    <Link to="/feature">Feature</Link>
                </Fragment>
            );
        }
        else {
            return (
                <Fragment>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/signin">Sign In</Link>
                </Fragment>
            );
        }
    }

    render() {
        return (
            <div className="header">
                <Link to="/">Redux Auth</Link>
                {this.renderLinks()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header);