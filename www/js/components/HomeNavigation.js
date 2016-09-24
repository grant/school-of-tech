import React, { Component } from 'react';
import SignupForm from './SignupForm';
import Button from './Button';
import { signupButtonHandler } from '../actions/AppActions'

class HomeNavigation extends Component {
  render() {
    return (
      <nav className="HomeNavigation">
        <Button
          className="signup small bordered"
          value="Sign up"
          onClick={this.signupButtonHandler}
        />
        <Button
          className="login small"
          value="Login"
          onClick={this.loginButtonHandler}
        />
      </nav>
    );
  }

  signupButtonHandler() {
    console.log('signup');
    signupButtonHandler();
  }

  loginButtonHandler() {
    console.log('login');
  }
}

export default HomeNavigation;
