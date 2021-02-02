import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Alert } from 'reactstrap';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';

import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import PageNotFound from './components/PageNotFound';
import ProfileSummary from './components/Profile/ProfileSummary';

import { setUser, clearError } from './actions'
import setAuthHeader from './utils/setAuthHeader';
import history from './history';
import particlesOptions from './utils/particlesOptions';
import './App.css';

class App extends Component {

  state = {
    particlesOptions,
    alertVisible: false
  }

  componentDidMount() {
    const token = window.sessionStorage.getItem('token');

    if (token) {
      setAuthHeader(token);
      const { sub } = jwt_decode(token);
      this.props.setUser(sub);
    }

    history.listen(() => {
      if (this.props.error && this.state.alertVisible) {
        this.setState({ alertVisible: false });
        this.props.clearError();
      }
    })
  }

  componentDidUpdate() {
    if (this.props.error && !this.state.alertVisible) {
      this.onAlertToggle();
    }
  }

  onAlertToggle = () => this.setState({ alertVisible: !this.state.alertVisible });

  render() {
    const { particlesOptions, alertVisible } = this.state;
    return (
      <div className="App">
        <Router history={history}>
          <Alert color="danger" isOpen={alertVisible} toggle={this.onAlertToggle}>
            {this.props.error}
          </Alert>
          <Particles className='particles'
            params={particlesOptions}
          />
          <Navigation />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/register" exact component={Register} />
            <Route path="/profile" exact component={ProfileSummary} />

            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps, { setUser, clearError })(App);
