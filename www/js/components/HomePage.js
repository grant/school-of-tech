import React, { Component } from 'react';
import HomeNavigation from './HomeNavigation';
import Button from './Button';

class HomePage extends Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    data: React.PropTypes.object.isRequired,
  };

  render() {
    // Load the initial page, send an AJAX to get login information
    return (
      <div className="HomePage">
        <Button
          value="Play"
          onClick={this.props.actions.signupButtonHandler}
        />
        <HomeNavigation/>
      </div>
    );
  }
}

export default HomePage;
