import React, { Component } from 'react';
import SignupForm from './SignupForm';
import Button from './Button';
import { signupButtonHandler } from '../actions/AppActions'

class HomeNavigation extends Component {
  render() {
    return (
      <nav className="HomeNavigation">
        <Button
          value="Sign up"
          onClick={this.signupButtonHandler}
        />
        <Button
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
