import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return robots.map((robot) => {
        return <Card key={robot.id} robot={robot} />
    });
};

export default CardList;