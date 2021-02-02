import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import { Link } from 'react-router-dom';
import history from '../../history';

const Signin = ({ signIn, auth }) => {

  if (window.sessionStorage.getItem('token')) {
    history.push('/');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitSignIn = (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  useEffect(() => {
    if (auth) {
      history.push('/');
    }
  }, [auth]);

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <form onSubmit={onSubmitSignIn}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                  type="email"
                  name="email-address"
                  id="email-address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </fieldset>
            <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit">Sign In</button>
          </form>
          <div className="lh-copy mt3">
            <Link to="/register" className="f6 link dim black db pointer">Create an account</Link>
          </div>
        </div>
      </main>
    </article>
  );
}


export default connect(null, { signIn })(Signin);