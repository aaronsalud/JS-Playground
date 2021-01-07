import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import { fetchRobots } from '../actions';
import '../styles/App.css';

const App = ({ robots, fetchRobots }) => {

    useEffect(() => {
        fetchRobots();
    }, [fetchRobots]);

    return (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox />
            <Scroll>
                <CardList robots={robots} />
            </Scroll>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        searchTerm: state.searchTerm,
        robots: state.robots
    }
}

export default connect(mapStateToProps, { fetchRobots })(App);