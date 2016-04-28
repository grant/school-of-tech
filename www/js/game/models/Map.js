/**
 * The physical world map of the game.
 */
export default class Map {
  /**
   * tiles: map[y][x] to tileTypeId
   * assumes 2d tiles
   * e.g.
   * this.tiles = {
   *   "22,11": 2
   * };
   *
   */
  tiles = [];

  /**
   * walls: maps x, y to vertical walls on XPOS, XNEG, ZPOS, ZNEG
   * e.g.
   * this.walls = {
   *   "22,11": [null, null, 3, null],
   * };
   */
  walls = {};

  /**
   * pathGrid: Used for `javascript-astar`
   */
  pathGrid = [];

  /**
   * rooms: List of rooms available for classes, restrooms, labs, offices, etc
   * e.g.
   * this.rooms = {
   *   'roomId': {
   *     roomVertices: [], // list of vertices of room
   *     door: {
   *       x: 23,
   *       y: 12,
   *       direction: 2, // of 4
   *     },
   *     name: '',
   *   }
   * };
   */
  rooms = {};

  /**
   * items: furniture maps id to x, y, direction, itemTypeId
   * e.g.
   * this.items = {
   *   '23234': {
   *     x: 23,
   *     y: 11,
   *     direction: 0,
   *     itemTypeId: 3,
   *   }
   * };
   */
  items = {};

  /**
   * Creates a width X length grid of null tileIds.
   * @param width
   * @param length
   */
  getBlankTileGrid({width, length}) {
    let tileGrid = [];
    for (let x = 0; x < width; ++x) {
      tileGrid[x] = [];
      for (let z = 0; z < length; ++z) {
        tileGrid[x][z] = null;
      }
    }
    return tileGrid;
  }

  /**
   * Sets all tiles within a rectangle to a specified tileId.
   * Starts from the origin and goes width in x direction, lenght in z direction
   * @param position
   * @param width
   * @param length
   * @param tileId
   */
  setTilesInRectangle({
    position,
    width,
    length,
    tileId,
    }) {
    for (let x = position.x; x < position.x + width; ++x) {
      for (let z = position.z; z < position.z + length; ++z) {
        this.tiles[x][z] = tileId;
      }
    }
  }

  constructor() {
    // Construct an initial map
    // Set tile 2d array
    this.tiles = this.getBlankTileGrid({
      width: 60,
      length: 40,
    });

    let hallwayTileId = 0;
    let classroom1TileId = 1;
    let classroom2TileId = 2;
    let classroom3TileId = 3;

    this.setTilesInRectangle({
      position: {
        x: 0,
        z: 3,
      },
      width: 8,
      length: 5,
      tileId: classroom1TileId,
    });
    this.setTilesInRectangle({
      position: {
        x: 0,
        z: 8,
      },
      width: 19,
      length: 2,
      tileId: hallwayTileId,
    });
    this.setTilesInRectangle({
      position: {
        x: 8,
        z: 3,
      },
      width: 3,
      length: 5,
      tileId: classroom2TileId,
    });
    this.setTilesInRectangle({
      position: {
        x: 3,
        z: 10,
      },
      width: 6,
      length: 5,
      tileId: classroom2TileId,
    });
    this.setTilesInRectangle({
      position: {
        x: 9,
        z: 10,
      },
      width: 2,
      length: 5,
      tileId: hallwayTileId,
    });
    this.setTilesInRectangle({
      position: {
        x: 11,
        z: 5,
      },
      width: 4,
      length: 3,
      tileId: classroom3TileId,
    });
    this.setTilesInRectangle({
      position: {
        x: 15,
        z: 5,
      },
      width: 4,
      length: 3,
      tileId: classroom1TileId,
    });
    this.setTilesInRectangle({
      position: {
        x: 19,
        z: 1,
      },
      width: 3,
      length: 5,
      tileId: classroom3TileId,
    });
    this.setTilesInRectangle({
      position: {
        x: 22,
        z: 1,
      },
      width: 3,
      length: 5,
      tileId: classroom2TileId,
    });
    this.setTilesInRectangle({
      position: {
        x: 25,
        z: 1,
      },
      width: 10,
      length: 5,
      tileId: classroom3TileId,
    });
  }

  getTiles():Array<Array<Object>> {
    return this.tiles;
  }
}