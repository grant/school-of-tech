import React, { Component } from 'react';
import NotificationBar from './NotificationBar';
import MenuBar from './MenuBar';

class GameHUD extends Component {
  render() {
    return (
      <div
        className="GameHUD"
      >
        <NotificationBar />
        <MenuBar />
      </div>
    );
  }
}

export default GameHUD;
