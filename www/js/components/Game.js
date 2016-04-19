import React, { Component } from 'react';
import GameHUD from './GameHUD';
import GameScene from './GameScene';
import GameModel from '../stores/GameModel'
import raf from 'raf';

class Game extends Component {
  constructor() {
    super();
    this.lastFrameTime = +new Date;
    this.gameModel = new GameModel();
    this.setupGameLoop();
    this.state = {
      gameState: this.gameModel
    };
  }

  /**
   * Called every frame
   */
  onLoop(timeDelta:number) {
    this.gameModel.updateGameTime(timeDelta);
    this.gameModel.state.balance += Math.floor(Math.random() * 100);
    this.setState({
      gameState: this.gameModel.state,
    });
  }

  /**
   * Sets up the game loop
   */
  setupGameLoop() {
    let self = this;
    raf(function tick() {
      let thisFrameTime = +new Date;
      let timeDelta = thisFrameTime - self.lastFrameTime;
      self.onLoop(timeDelta);
      self.lastFrameTime = thisFrameTime;
      raf(tick);
    });
  }

  render() {
    return (
      <div
        className="Game"
      >
        <GameScene
          gameState={this.state.gameState}
        />
        <GameHUD
          gameState={this.state.gameState}
        />
      </div>
    );
  }
}

export default Game;
