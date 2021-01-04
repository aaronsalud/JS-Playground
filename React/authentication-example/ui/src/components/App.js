import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './auth/Signup';
import Feature from './Feature';
import Header from './Header';
import Welcome from './Welcome';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" exact component={Signup}/>
                <Route path="/feature" exact component={Feature}/>
            </BrowserRouter>
        </div>
    );
};

export default App;