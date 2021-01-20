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

const particlesOptions = {
  //customize this to your liking
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

const initialState = {
  input: '',
  imageUrl: '',
  boxes: [],
  route: 'signin',
  isSignedIn: false,
  isProfileModalOpen: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    const token = window.sessionStorage.getItem('token');

    if (token) {
      setAuthHeader(token);
      const { sub } = jwt_decode(token);
      this.props.setUser(sub);
    }
  }

  calculateFaceLocations = (data) => {
    return data.outputs[0].data.regions.map(face => {
      const clarifaiFace = face.region_info.bounding_box;
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        id: face.id,
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    });
  }

  displayFaceBoxes = (boxes) => {
    this.setState({ boxes });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    const token = window.sessionStorage.getItem('token');
    fetch('/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json', 'Authorization': token },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json', 'Authorization': token },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }))
            })
            .catch(console.log)

        }
        this.displayFaceBoxes(this.calculateFaceLocations(response));
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      return this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }

  toggleProfileModal = () => {
    this.setState({ isProfileModalOpen: !this.state.isProfileModalOpen });
  }

  render() {
    const { isSignedIn, imageUrl, route, boxes, isProfileModalOpen, user } = this.state;
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
          </Switch>

        </Router>
        {/* 
        {
          isProfileModalOpen &&
          <Modal isOpen={isProfileModalOpen} toggle={this.toggleProfileModal} backdrop={true} keyboard={true}>
            <ModalHeader toggle={this.toggleProfileModal}>Profile Summary</ModalHeader>
            <ModalBody>
              <ProfileSummary user={user} />
            </ModalBody>
          </Modal>
        }
        */}
      </div>
    );
  }
}

export default connect(null, { setUser })(App);
