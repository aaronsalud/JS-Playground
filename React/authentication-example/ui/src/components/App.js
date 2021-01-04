import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Welcome from './Welcome';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={Welcome} />
            </BrowserRouter>
        </div>
    );
};

export default App;