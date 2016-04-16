import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from './HomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

// REDUX STUFF
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
