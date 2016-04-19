
const GAME_SPEED = 1;

/**
 * The local state of the game.
 */
class GameModel {
  constructor() {
    this.state = {
      metadata: {
        username: '',
      },
      professors: {

      },
      students: {

      },
      balance: 0,
      gametime: 0, // game days (30 days per game month)
      curriculum: {

      },
      map: {
        name: '',
        classrooms: {
        }
      },
      mission: {
        id: -1,
        name: '',
      },
      hud: {

      }
    };
  }

  /**
   * Update the game time
   * @param timeDelta The time delta between last frame and the current frame.
   */
  updateGameTime(timeDelta:number) {
    this.state.gametime += timeDelta * GAME_SPEED * 0.0001;
  }
}

export default GameModel;
