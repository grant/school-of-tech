import React, { Component } from 'react';

const sidebarItem = {
  item1: {
    name: 'Item 1',
  },
  item2: {
    name: 'Item 2',
  },
};

/**
 * A list of buttons on the left side of the screen.
 */
class Sidebar extends Component {
  static propTypes = {
  };

  render() {
    // Subcomponents
    function createSidebarItem(id:string) {
      return (
        <li className={`${id} sidebarItem`}>
          <img className='icon' src={`img/sidebar/${id}.png`}/>
          <span className='title'>
            {sidebarItem[id].name}
          </span>
        </li>
      );
    }

    let sidebarItems = [
      createSidebarItem('item1'),
      createSidebarItem('item2'),
    ];
    return (
      <ul
        className="Sidebar"
      >
        {sidebarItems}
      </ul>
    );
  }
}

export default Sidebar;
