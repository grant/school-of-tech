import Map from './Map';

/**
 * Gets a demo map.
 */
class DemoMap {
  constructor() {
    const map:Map = new Map();

    // Construct an initial map
    // Set tile 2d array
    map.setupBlankMapGrid({
      width: 60,
      length: 40,
    });

    let hallwayTileId = 0;
    let classroom1TileId = 1;
    let classroom2TileId = 2;
    let classroom3TileId = 3;

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
        direction: Map.SIDE.ZNEG,
      }],
      doors: [{
        x: 5,
        z: 3,
        direction: Map.SIDE.ZNEG,
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

    return map;
  }
}

export default DemoMap;