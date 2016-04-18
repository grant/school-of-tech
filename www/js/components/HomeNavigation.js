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
    signupButtonHandler();
  }

  loginButtonHandler() {
    console.log('test');
  }
}

export default HomeNavigation;
