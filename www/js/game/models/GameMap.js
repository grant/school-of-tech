import Enum from 'es6-enum';
import Renderer from '../Renderer';

type TileID = number;
type Room = {
  roomId: {
    roomVertices: String[]
  }
};

/**
 * The physical world map of the game.
 */
export default class GameMap {
  static SIDE = Enum(
    'XPOS',
    'XNEG',
    'YPOS',
    'YNEG',
    'ZPOS',
    'ZNEG'
  );

  /**
   * The width and length of the map.
   */
  width:Number;
  height:Number;

  /**
   * tiles: map[x][z] to tileTypeId
   * assumes 2d tiles
   * TODO Chunk tiles
   */
  tiles:Array<Array<TileID>> = [];

  /**
   * walls: map[z][x] to vertical walls on [XPOS, XNEG, ZPOS, ZNEG]
   * TODO make sparce map
   */
  walls:Object<Number<Number>> = [];

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
  rooms:{[roomId:string]:Room} = {};

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
    this.width = width;
    this.length = length;

    let tileGrid = [];
    let wallGrid = [];
    for (let x = 0; x < this.width; ++x) {
      tileGrid[x] = [];
      wallGrid[x] = [];
      for (let z = 0; z < this.length; ++z) {
        tileGrid[x][z] = null;
        wallGrid[x][z] = [null, null, null, null];
      }
    }
    this.tiles = tileGrid;
    this.walls = wallGrid;
  }

  /**
   * Fills all tiles that aren't covered with grass.
   */
  fillMapGridWithGrass() {
    for (let x = 0; x < this.width; ++x) {
      for (let z = 0; z < this.length; ++z) {
        // Just check if the tile has something
        // If there's nothing, fill it with grass
        if (this.tiles[x][z] === null) {
          // Put grass
          this.tiles[x][z] = 4; // grass
        }
      }
    }
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
            case GameMap.SIDE.XPOS:
              xpos = null;
              break;
            case GameMap.SIDE.XNEG:
              xneg = null;
              break;
            case GameMap.SIDE.ZPOS:
              zpos = null;
              break;
            case GameMap.SIDE.ZNEG:
              zneg = null;
              break;
          }
        }
      }

      // Doors
      for (let door of doors) {
        if (door.x === x && door.z === z) {
          switch (door.direction) {
            case GameMap.SIDE.XPOS:
              xpos = null;
              break;
            case GameMap.SIDE.XNEG:
              xneg = null;
              break;
            case GameMap.SIDE.ZPOS:
              zpos = null;
              break;
            case GameMap.SIDE.ZNEG:
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

  }

  /**
   * Gets the building floor
   * @returns A 2D array of
   */
  getFloor():Array<Array<TileID>> {
    return this.tiles;
  }

  getWalls():Array<Array<Array<number>>> {
    return this.walls;
  }
}