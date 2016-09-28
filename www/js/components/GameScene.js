import React, { Component } from 'react';
import numeral from 'numeral';
import GameDate from '../game/models/GameTime';
import Game from '../game';

const gameContainerRef = 'gameContainer';

class GameScene extends Component {
  static propTypes = {
    gametime: React.PropTypes.object.isRequired,
  };

  constructor() {
    super();
  }

  // Setup game after first render
  componentDidMount() {
    let game = new Game(this.refs[gameContainerRef]);
    game.render();
  }

  render() {
    let game = this.props.gameState;
    let gametime = numeral(game.gametime).format('0.00');
    let balance = numeral(game.balance).format('0,0');

    let gameDate = GameDate.getDate(gametime);

    return (
      <div
        ref={gameContainerRef}
        className="GameScene"
      >
        <div className="gamedate">
          {`${gameDate.monthName} ${gameDate.day}, Year ${gameDate.year}`}
        </div>
        <div className="gametime">{'Day: ' + gametime}</div>
        <div className="money">{'Balance: $' + balance}</div>
      </div>
    );
  }
}

export default GameScene;
