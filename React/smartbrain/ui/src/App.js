import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';

import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import PageNotFound from './components/PageNotFound';

import { setUser } from './actions'
import setAuthHeader from './utils/setAuthHeader';
import history from './history';
import particlesOptions from './utils/particlesOptions';
import './App.css';

class App extends Component {

  state = {
    particlesOptions
  }

  componentDidMount() {
    const token = window.sessionStorage.getItem('token');

    if (token) {
      setAuthHeader(token);
      const { sub } = jwt_decode(token);
      this.props.setUser(sub);
    }
  }

  render() {
    const { particlesOptions } = this.state;
    return (
      <div className="App">
        <Router history={history}>
          <Particles className='particles'
            params={particlesOptions}
          />
          <Navigation toggleProfileModal={this.toggleProfileModal} />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/register" exact component={Register} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(null, { setUser })(App);
