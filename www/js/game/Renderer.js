import Iso from 'iso.js';
const Tile = Iso.Tile;
const Color = Iso.Color;
Iso.DEBUG = false;

const tileIdToColor = {
  0: new Color('red'),
  1: new Color('blue'),
  2: new Color('pink'),
  3: new Color('orange'),
};

/**
 * The rendering engine for the game.
 */
export default class Renderer {

  /**
   * Sets up the renderer's container.
   * @param container
   */
  static setup(container:HTMLElement) {
    this.isoWorld = new Iso(container);
  }

  /**
   * Adds tiles to the world
   * @param tilegrid
   */
  static addTiles(tilegrid:Array<Array<Object>>) {
    for (let z = 0; z < tilegrid.length; ++z) {
      let xtiles = tilegrid[z];
      for (let x = 0; x < xtiles.length; ++x) {
        let tile = xtiles[x];
        if (tile !== null) {
          let isoTile = new Tile(1, 1).position(x, 0, z).color(tileIdToColor[tile]);
          this.isoWorld.add(isoTile);
        }
      }
    }
  }

  /**
   * Renders the world.
   */
  static render() {
    this.isoWorld.render();
  }
}