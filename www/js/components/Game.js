import React, { Component } from 'react';
import GameHUD from './GameHUD';

class Game extends Component {
  render() {
    return (
      <div
        className="Game"
      >
        <GameHUD />
      </div>
    );
  }
}

export default Game;
