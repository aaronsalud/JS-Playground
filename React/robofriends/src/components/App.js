import React, { useState } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

const App = () => {

    const [robotItems, setRobotItems] = useState(robots);

    const onSearchChange = (searchText) => {
        if (searchText) {
            const filteredRobots = robotItems.filter(robots => {
                return robots.name.toLowerCase().includes(searchText.toLowerCase());
            });
            setRobotItems(filteredRobots);
        }
        else {
            setRobotItems(robots);
        }

    };

    return (
        <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox onSearchChange={onSearchChange} />
            <CardList robots={robotItems} />
        </div>
    );
};

export default App;