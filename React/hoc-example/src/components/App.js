import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { changeAuth } from 'actions';

const App = ({ auth, changeAuth }) => {

    const renderAuthButton = () => {
        if (auth) {
            return <button onClick={() => changeAuth(false)}>Sign Out</button>;
        }
        else {
            return <button onClick={() => changeAuth(true)}>Sign In</button>;
        }
    };

    const renderHeader = () => {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post a Comment</Link></li>
                <li><Link to="/">{renderAuthButton()}</Link></li>
            </ul>
        );
    };

    return (
        <div>
            {renderHeader()}
            <Route path="/post" component={CommentBox} />
            <Route path="/" exact component={CommentList} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return { auth: state.isLoggedIn };
}

export default connect(mapStateToProps, { changeAuth })(App);