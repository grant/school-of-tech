import Enum from 'es6-enum';

/**
 * The physical world map of the game.
 */
export default class Map {
  static SIDE = Enum(
    'XPOS',
    'XNEG',
    'YPOS',
    'YNEG',
    'ZPOS',
    'ZNEG'
  );

  /**
   * tiles: map[x][z] to tileTypeId
   * assumes 2d tiles
   * TODO Chunk tiles
   */
  tiles = [];

  /**
   * walls: map[z][x] to vertical walls on [XPOS, XNEG, ZPOS, ZNEG]
   * TODO make sparce map
   */
  walls = [];

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
  setupBlankMapGrid({width, length}) {
    let tileGrid = [];
    let wallGrid = [];
    for (let x = 0; x < width; ++x) {
      tileGrid[x] = [];
      wallGrid[x] = [];
      for (let z = 0; z < length; ++z) {
        tileGrid[x][z] = null;
        wallGrid[x][z] = [null, null, null, null];
      }
    }
    this.tiles = tileGrid;
    this.walls = wallGrid;
  }

  /**
   * Sets all tiles within a rectangle to a specified tileId.
   * Starts from the origin and goes width in x direction, lenght in z direction
   * @param position
   * @param size
   * @param windows
   * @param doors
   * @param tileId
   */
  createRoom({
    position,
    size,
    windows = [],
    doors = [],
    tileId,
    }) {
    // Remember:
    // XPOS: TOP-LEFT, XNEG: BOTTOM-RIGHT
    // ZPOS: TOP-RIGHT, ZNEG: BOTTOM-LEFT

    let {width, length} = size;

    /**
     * Gets the walls surrounding this tile (null for no wall)
     * @param x
     * @param z
     * @returns {*[]}
     */
    let getWallArray = (x:number, z:number) => {
      let xneg = (z === position.z) ? tileId : null;
      let xpos = (z === position.z + length - 1) ? tileId : null;
      let zneg = (x === position.x) ? tileId : null;
      let zpos = (x === position.x + width - 1) ? tileId : null;

      // remove window areas from walls
      // TODO optimize so you don't look at all windows, just this (x, y)

      // Windows
      for (let window of windows) {
        if (window.x === x && window.z === z) {
          switch (window.direction) {
            case Map.SIDE.XPOS:
              xpos = null;
              break;
            case Map.SIDE.XNEG:
              xneg = null;
              break;
            case Map.SIDE.ZPOS:
              zpos = null;
              break;
            case Map.SIDE.ZNEG:
              zneg = null;
              break;
          }
        }
      }

      // Doors
      for (let door of doors) {
        if (door.x === x && door.z === z) {
          switch (door.direction) {
            case Map.SIDE.XPOS:
              xpos = null;
              break;
            case Map.SIDE.XNEG:
              xneg = null;
              break;
            case Map.SIDE.ZPOS:
              zpos = null;
              break;
            case Map.SIDE.ZNEG:
              zneg = null;
              break;
          }
        }
      }

      return [xpos, xneg, zpos, zneg];
    };

    for (let x = position.x; x < position.x + width; ++x) {
      for (let z = position.z; z < position.z + length; ++z) {
        this.tiles[x][z] = tileId;
        this.walls[x][z] = getWallArray(x, z);
      }
    }
  }

  constructor() {
    // Construct an initial map
    // Set tile 2d array
    this.setupBlankMapGrid({
      width: 60,
      length: 40,
    });

    let hallwayTileId = 0;
    let classroom1TileId = 1;
    let classroom2TileId = 2;
    let classroom3TileId = 3;

    this.createRoom({
      position: {
        x: 11,
        z: 3,
      },
      size: {
        width: 2,
        length: 2,
      },
      tileId: classroom1TileId,
    });
    this.createRoom({
      position: {
        x: 5,
        z: 3,
      },
      size: {
        width: 3,
        length: 5,
      },
      windows: [{
        x: 5,
        z: 7,
        direction: Map.SIDE.ZNEG,
      }],
      doors: [{
        x: 5,
        z: 3,
        direction: Map.SIDE.ZNEG,
      }],
      tileId: classroom1TileId,
    });
    this.createRoom({
      position: {
        x: 3,
        z: 8,
      },
      size: {
        width: 16,
        length: 2,
      },
      tileId: hallwayTileId,
    });
    this.createRoom({
      position: {
        x: 8,
        z: 3,
      },
      size: {
        width: 3,
        length: 5,
      },
      tileId: classroom2TileId,
    });
    this.createRoom({
      position: {
        x: 3,
        z: 10,
      },
      size: {
        width: 6,
        length: 5,
      },
      tileId: classroom2TileId,
    });
    this.createRoom({
      position: {
        x: 9,
        z: 10,
      },
      size: {
        width: 2,
        length: 5,
      },
      tileId: hallwayTileId,
    });
    this.createRoom({
      position: {
        x: 11,
        z: 5,
      },
      size: {
        width: 4,
        length: 3,
      },
      tileId: classroom3TileId,
    });
    this.createRoom({
      position: {
        x: 15,
        z: 5,
      },
      size: {
        width: 4,
        length: 3,
      },
      tileId: classroom1TileId,
    });
    this.createRoom({
      position: {
        x: 19,
        z: 3,
      },
      size: {
        width: 5,
        length: 12,
      },
      tileId: classroom3TileId,
    });
    this.createRoom({
      position: {
        x: 11,
        z: 10,
      },
      size: {
        width: 8,
        length: 5,
      },
      tileId: classroom1TileId,
    });
  }

  getTiles():Array<Array<Object>> {
    return this.tiles;
  }

  getWalls():Array<Array<Array<number>>> {
    return this.walls;
  }
}