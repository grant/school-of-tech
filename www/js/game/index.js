import DemoMap from './models/DemoMap';
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
    const demoMap = new DemoMap();

    Renderer.addFloor(demoMap.getFloor());
    Renderer.addWalls(demoMap.getWalls());
  }

  /**
   * Renders the game.
   */
  render() {
    Renderer.render();
  }
}
