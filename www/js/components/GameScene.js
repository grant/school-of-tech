import React, { Component } from 'react';
import numeral from 'numeral';
import GameDate from '../game/GameTime';
import Iso from 'iso.js';

class GameScene extends Component {
  static propTypes = {
    gametime: React.PropTypes.object.isRequired,
  };

  constructor() {
    super();
  }

  // Setup Iso.js after first render
  componentDidMount() {
    var Cube = Iso.Cube;
    Iso.DEBUG = false;

    // TODO use react to get element
    var container = document.getElementById('gameContainer');

    var world = new Iso(container);

    world.add(new Cube(1, 1, 1));

    world.render();
  }

  render() {
    //let game = this.props.gameState;
    //let gametime = numeral(game.gametime).format('0.00');
    //let balance = numeral(game.balance).format('0,0');
    //
    //let gameDate = GameDate.getDate(gametime);

    return (
      <div
        className="GameScene"
      >
        {
          //<div className="gamedate">
          //  {`${gameDate.monthName} ${gameDate.day}, Year ${gameDate.year}`}
          //</div>
          //<div className="gametime">{'Day: ' + gametime}</div>
          //<div className="money">{'Balance: $' + balance}</div>
        }
        <div id="gameContainer"></div>
      </div>
    );
  }
}

export default GameScene;
