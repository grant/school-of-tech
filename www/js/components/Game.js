import React, { Component } from 'react';
import GameHUD from './GameHUD';
import GameScene from './GameScene';
import GameState from '../stores/GameState'

class Game extends Component {
  constructor() {
    super();
    let game = new GameState();
    console.log(game.state);
  }

  render() {
    return (
      <div
        className="Game"
      >
        <GameScene />
        <GameHUD />
      </div>
    );
  }
}

export default Game;
