import React, { Component } from 'react';
import SignupForm from './SignupForm';
import Button from './Button';

class HomeNavigation extends Component {
  render() {
    return (
      <nav className="HomeNavigation">
        <Button value="Sign up"/>
        <Button value="Login"/>
      </nav>
    );
  }
}

export default HomeNavigation;
