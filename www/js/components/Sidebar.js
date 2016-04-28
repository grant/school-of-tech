import React, { Component } from 'react';

const sidebarItems = [
  {
    id: 'item1',
    name: 'Item 1',
    subitems: [{
      id: 'subitem1',
      name: 'Subitem 1',
    }, {
      id: 'subitem2',
      name: 'Sub 2',
      subitems: [{
        id: 'subsubitem1',
        name: 'sub sub item 1',
      }],
    }],
  },
  {
    id: 'item2',
    name: 'Item 2',
  },
];

/**
 * A list of buttons on the left side of the screen.
 */
class Sidebar extends Component {
  static propTypes = {};

  constructor() {
    super();
    this.state = {
      // value at index _n_ is the selection (index of item selected in that column) at column _n_
      // so [2, 0] would mean column[0][2] and column[1][0] are selected.
      selection: [],
    };
  }

  onItemClick(id:string, columnIndex:number, rowIndex:number) {
    // Update the selection to reflect the click
    let selection = this.state.selection;

    let selectionDepth = selection.length;
    if (columnIndex === selectionDepth) {
      // If clicked on columnIndex at selectionDepth, expand deeper selection
      selection.push(rowIndex);
    } else if (columnIndex < selectionDepth) {
      if (selection.length - 1 === columnIndex && selection[columnIndex] === rowIndex) {
        // Deselect deepest selection
        selection.pop();
      } else {
        // Unselect all up until column index
        selection.length = columnIndex;

        // Push new shallow selection
        selection.push(rowIndex);
      }
    }
    // If clicked on selection, disable the selection

    // Update the selection
    this.setState({
      selection: selection,
    });
  }

  render() {
    let state = this.state;

    // Subcomponents
    let createSidebarItem = (sidebarItem:Object, columnIndex:number, rowIndex:number) => {
      let id = sidebarItem.id;
      let selected = (columnIndex < state.selection.length && state.selection[columnIndex] === rowIndex) ? 'selected' : '';
      return (
        <li
          className={`${id} sidebarItem ${selected}`}
          onClick={this.onItemClick.bind(this, id, columnIndex, rowIndex)}
        >
          <img className='icon' src={`img/sidebar/${id}.png`}/>
          <span className='title'>
            {sidebarItem.name}
          </span>
        </li>
      );
    };

    // Populate column data (note the <=)
    let sidebarColumnData = [];
    let currentColumn = sidebarItems;
    for (let columnIndex = 0; columnIndex <= state.selection.length; ++columnIndex) {
      // Push current column if exists
      if (currentColumn) {
        sidebarColumnData.push(currentColumn);
      }

      // Look at next selection column
      if (columnIndex != state.selection.length) {
        currentColumn = currentColumn[state.selection[columnIndex]].subitems;
      }
    }

    return (
      <ul
        className="Sidebar"
      >
        {sidebarColumnData.map((columnData, columnIndex) => {
          return (
            <div className={`column ${columnIndex}`}>
              {columnData.map(function (columnDatum, rowIndex) {
                return createSidebarItem(columnDatum, columnIndex, rowIndex);
              })}
            </div>
          );
        })}
      </ul>
    );
  }
}

export default Sidebar;
