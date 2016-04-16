import React, { Component } from 'react';
import HomeNavigation from './HomeNavigation';
import Button from './Button';

class HomePage extends Component {
  render() {
    // Load the initial page, send an AJAX to get login information
    return (
      <div className="HomePage">
        <Button value="Play" />
        <HomeNavigation/>
      </div>
    );
  }
}

export default HomePage;
