import React, { Component } from 'react';

class MenuBar extends Component {
  render() {
    let datemoney = (
      <li className="datemoney menuItem">
        <div className="date">Date</div>
        <div className="money">
          <span className="currency">$</span>
          <span className="balance">0</span>
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
