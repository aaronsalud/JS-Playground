import React from 'react';
import Card from './Card';
import { robots} from './robots';

const App = () => {


    const renderRobots = () =>{
        return robots.map((robot)=>{
            return <Card key={robot.id} robot={robot}/>
        });
    }

    return( 
        <div>
            {renderRobots()}
        </div>
    );
};

export default App;