import React, { Component } from 'react';
import NotificationBar from './NotificationBar';
import MenuBar from './MenuBar';

class GameHUD extends Component {
  static propTypes = {
    gametime: React.PropTypes.object.isRequired,
  };

  render() {
    let balance = this.props.gameState.balance;
    return (
      <div
        className="GameHUD"
      >
        <NotificationBar />
        <MenuBar
          balance={balance}
        />
      </div>
    );
  }
}

export default GameHUD;
