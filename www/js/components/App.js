import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomePage from './HomePage'
import * as AppActions from '../actions/AppActions';

class App extends Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    data: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.setUpConnection();
  }

  setUpConnection() {
    // Setup socket.io
  }

  render() {
    const {
      actions,
      data,
      } = this.props;
    return (
      <div className="App">
        <HomePage
          actions={actions}
        />
      </div>
    );
  }
}

// Injects props.data into App
function mapStateToProps(state) {
  return {
    data: state
  };
}

// Injects props.actions into App
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(App);
