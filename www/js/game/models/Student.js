import RandomName from 'random-name';
import Person from './Person';

const CLASS_STANDING = ['Freshman', 'Sophomore', 'Junior', 'Senior'];
const MAX_CREDITS = 100;

/**
 * A student in the game.
 */
class Student extends Person {
  constructor() {
    this.credits = 0;
    this.wants = {

    };
    // The current class ids the student is enrolled in.
    this.classes = {

    };
    // The amount of money this student has
    this.money = 10000;

    this.thoughts = {};
    // history: A blob of the history of this person
    this.history = {

    };
    // dropout: If the student is unhappy for a long period of time he/she can drop out.
    this.dropout = false;
  }

  static creditsToClassStanding(credits:number) {
    return CLASS_STANDING[Math.max(credits / MAX_CREDITS, MAX_CREDITS)];
  }
}

export default Student;