import React, { Component } from 'react';
import NotificationBar from './NotificationBar';
import MenuBar from './MenuBar';
import Sidebar from './Sidebar';
import Modal from './Modal';

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
        <div className="modalContainer">
          {
            //<Modal>
            //  <div className="foo">foo</div>
            //</Modal>
          }
        </div>
        <NotificationBar />
        <Sidebar/>
        <MenuBar
          balance={balance}
        />
      </div>
    );
  }
}

export default GameHUD;
