import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import ProfileSummary from './components/Profile/ProfileSummary';

import { setUser } from './actions'
import setAuthHeader from './utils/setAuthHeader';

import history from './history';
import './App.css';
import PageNotFound from './components/PageNotFound';

class App extends Component {

  state = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }

  componentDidMount() {
    const token = window.sessionStorage.getItem('token');

    if (token) {
      setAuthHeader(token);
      const { sub } = jwt_decode(token);
      this.props.setUser(sub);
    }
  }

  toggleProfileModal = () => {
    this.setState({ isProfileModalOpen: !this.state.isProfileModalOpen });
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
            <Route component={PageNotFound}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(null, { setUser })(App);
