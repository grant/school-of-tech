import React, { Component } from 'react';
import numeral from 'numeral';

class GameScene extends Component {
  render() {
    let game = this.props.gameState;
    let gametime = numeral(game.gametime).format('0.00');
    let balance = numeral(game.balance).format('0,0');
    console.log(JSON.stringify(this.props));
    return (
      <div
        className="GameScene"
      >
        <div className="gametime">{'Day: ' + gametime}</div>
        <div className="money">{'Balance: $' + balance}</div>
      </div>
    );
  }
}

export default GameScene;
