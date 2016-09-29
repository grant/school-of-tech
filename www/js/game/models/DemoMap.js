import GameMap from './GameMap';
import * as Constants from './Constants';

/**
 * Gets a demo map.
 */
class DemoMap {
  /**
   * Creates a demo map.
   * @returns {GameMap}
   */
  constructor() {
    const map:GameMap = new GameMap();
    this.setupMap(map);
    this.createRooms(map);
    this.addGrass(map);
    return map;
  }

  /**
   * Construct an initial map
   * Set tile 2d array
   * @param map
   */
  setupMap(map:GameMap) {
    map.setupBlankMapGrid({
      width: 30,
      length: 20,
    });
  }

  /**
   * Creates rooms and adds it to the map
   * @param map
   */
  createRooms(map:GameMap) {
    let hallwayTileId = Constants.ROOM_ID_0_COLOR;
    let classroom1TileId = Constants.ROOM_ID_1_COLOR;
    let classroom2TileId = Constants.ROOM_ID_2_COLOR;
    let classroom3TileId = Constants.ROOM_ID_3_COLOR;

    map.createRoom({
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
    map.createRoom({
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
        direction: GameMap.SIDE.ZNEG,
      }],
      doors: [{
        x: 5,
        z: 3,
        direction: GameMap.SIDE.ZNEG,
      }],
      tileId: classroom1TileId,
    });
    map.createRoom({
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
    map.createRoom({
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
    map.createRoom({
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
    map.createRoom({
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
    map.createRoom({
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
    map.createRoom({
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
    map.createRoom({
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
    map.createRoom({
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

  /**
   * Adds grass to all tiles on the map not covered by a room.
   * @param map
   */
  addGrass(map:GameMap) {
    map.fillMapGridWithGrass();
  }
}

export default DemoMap;