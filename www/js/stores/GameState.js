/**
 * The local state of the game.
 */
class GameState {
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
      gametime: 0, // days
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
}

export default GameState;
