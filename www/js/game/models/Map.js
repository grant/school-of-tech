/**
 * The physical world map of the game.
 */
class Map {
  constructor() {
    // tiles: maps `x,y` to tileTypeId
    this.tiles = {
      "22,11": 2
    };
    // walls: maps x, y to vertical walls on XPOS, XNEG, ZPOS, ZNEG
    this.walls = {
      "22,11": [null, null, 3, null],
    };
    // pathGrid: Used for `javascript-astar`
    this.pathGrid = [];
    // rooms: List of rooms available for classes, restrooms, labs, offices, etc
    this.rooms = {
      'roomId': {
        roomVertices: [], // list of vertices of room
        door: {
          x: 23,
          y: 12,
          direction: 2, // of 4
        },
        name: '',
      }
    };
    // items: furniture maps id to x, y, direction, itemTypeId
    this.items = {
      23234: {
        x: 23,
        y: 11,
        direction: 0,
        itemTypeId: 3,
      }
    };
  }
}
export default Map;