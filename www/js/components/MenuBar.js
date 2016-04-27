import React, { Component } from 'react';
import numeral from 'numeral';

const menuItem = {
  mainmenu: {
    name: 'Main Menu',
  },
  professors: {
    name: 'Professors',
  },
  students: {
    name: 'Students',
  },
  build: {
    name: 'Build',
  },
  school: {
    name: 'School',
  },
};

class MenuBar extends Component {
  static propTypes = {
    balance: React.PropTypes.number.isRequired,
  };

  render() {
    // Variables
    let balance = numeral(this.props.balance).format('0,0');

    // Subcomponents
    function createMenuItem(id:string) {
      return (
        <li className={`${id} menuItem`}>
          <img src={`img/menubar/${id}.png`}/>
          <span className="title">
            {menuItem[id].name}
          </span>
        </li>
      );
    }

    // TODO Add side bar (with expanding subcomponents)
    // TODO Add full page screen with right fixed, left scroll
    // TODO Add more primitive components
    // TODO Develop Iso.js some more

    let datemoney = (
      <li className="datemoney menuItem">
        <div className="date">Date</div>
        <div className="money">
          <span className="currency">$</span>
          <span className="balance">{balance}</span>
        </div>
      </li>
    );

    let menuItems = [
      createMenuItem('mainmenu'),
      datemoney,
      createMenuItem('school'),
      createMenuItem('build'),
      createMenuItem('professors'),
      createMenuItem('students'),
    ];
    return (
      <ul
        className="MenuBar"
      >
        {menuItems}
      </ul>
    );
  }
}

export default MenuBar;
