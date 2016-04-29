import Map from './models/Map';
import Renderer from './Renderer';

/**
 * All of the game logic.
 */
export default class Game {
  /**
   * Sets up the game world.
   * @param gameContainer
   */
  constructor(gameContainer:HTMLElement) {
    // Setup renderer
    Renderer.setup(gameContainer);

    // Setup map
    this.map = new Map();

    Renderer.addTiles(this.map.getTiles());
    Renderer.addWalls(this.map.getWalls());
  }

  /**
   * Renders the game.
   */
  render() {
    Renderer.render();
  }
}
