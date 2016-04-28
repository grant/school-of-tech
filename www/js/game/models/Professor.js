import RandomName from 'random-name';
import Person from './Person';

class Professor extends Person {
  constructor() {
    // classes: list of class ids this professor teaches
    this.classes = {};
  }
}
export default Professor;