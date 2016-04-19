import React, { Component } from 'react';
import numeral from 'numeral';

class MenuBar extends Component {
  static propTypes = {
    balance: React.PropTypes.number.isRequired,
  };

  render() {
    // Variables
    let balance = numeral(this.props.balance).format('0,0');

    // Subcomponents
    let datemoney = (
      <li className="datemoney menuItem">
        <div className="date">Date</div>
        <div className="money">
          <span className="currency">$</span>
          <span className="balance">{balance}</span>
        </div>
      </li>
    );

    let professors = (
      <li className="professors menuItem">
        Professors
      </li>
    );

    let students = (
      <li className="students menuItem">
        Students
      </li>
    );

    let build = (
      <li className="build menuItem">
        Build
      </li>
    );

    let school = (
      <li className="school menuItem">
        School
      </li>
    );

    let menuItems = [
      datemoney,
      school,
      build,
      professors,
      students,
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
