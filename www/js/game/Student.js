import RandomName from 'random-name';
import Person from './Person';

const CLASS_STANDING = ['Freshman', 'Sophomore', 'Junior', 'Senior'];
const MAX_CREDITS = 100;

/**
 * A student in the game
 */
class Student extends Person {
  constructor() {
    this.credits = 0;
    this.wants = {

    };
  }

  static creditsToClassStanding(credits:number) {
    return CLASS_STANDING[Math.max(credits / MAX_CREDITS, MAX_CREDITS)];
  }
}

export default Student;