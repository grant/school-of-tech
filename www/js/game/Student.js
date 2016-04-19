const CLASS_STANDING = ['Freshman', 'Sophomore', 'Junior', 'Senior'];
const MAX_CREDITS = 100;

/**
 * A student in the game
 */
class Student {
  constructor() {
    this.position = {
      x: 0,
      y: 0,
      z: 0,
    };
    this.needs = {
      hunger: 100,
      bladder: 100,
      fun: 100,
      energy: 100,
      hygiene: 100,
      social: 100,
    };
    this.credits = 0; // out of 100 credits
  }

  static creditsToClassStanding(credits:number) {
    return CLASS_STANDING[Math.max(credits / MAX_CREDITS, MAX_CREDITS)];
  }
}

export default Student;