import React from 'react';

class Signin extends React.Component {

  state = { email: '', password: '' };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  saveAuthTokenInSession = token => {
    window.sessionStorage.setItem('token', token);
  }

  onSubmitSignIn = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          this.saveAuthTokenInSession(data.token);
          this.props.fetchUser(data.userId, data.token);
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <form onSubmit={this.onSubmitSignIn}>
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                    type="email"
                    name="email-address"
                    id="email-address"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                    type="password"
                    name="password"
                    id="password"
                    value={this.state.password}
                    onChange={(e) => this.setState({ password: e.target.value })}
                  />
                </div>
              </fieldset>
              <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit">Sign In</button>
            </form>
            <div className="lh-copy mt3">
              <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;