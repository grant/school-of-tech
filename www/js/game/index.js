import Iso from 'iso.js';
const Cube = Iso.Cube;
const Tile = Iso.Tile;

Iso.DEBUG = false;

/**
 * All of the game logic.
 */
export default class Game {
  /**
   * Sets up the game container.
   * @param gameContainer
   */
  constructor(gameContainer:HTMLElement) {
    this.world = new Iso(gameContainer);

    this.world.add(new Tile(1, 1, 1));
  }

  /**
   * Renders the game to the game container.
   */
  render() {
    this.world.render();
  }
}
