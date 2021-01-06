import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import ErrorBoundary from './ErrorBoundary';
import '../styles/App.css';

const App = () => {

    const [robots, setRobots] = useState([]);

    useEffect(() => {
        fetchRobots();
    }, []);

    const onSearchChange = (searchText) => {
        if (searchText) {
            const filteredRobots = robots.filter(robot => {
                return robot.name.toLowerCase().includes(searchText.toLowerCase());
            });
            setRobots(filteredRobots);
        }
        else {
            fetchRobots();
        }

    };

    const fetchRobots = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setRobots(response.data);
    };

    return (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox onSearchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={robots} />
                </ErrorBoundary>
            </Scroll>
        </div>
    );
};

export default App;