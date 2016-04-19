import RandomName from 'random-name';

class Person {
  constructor() {
    // name: The full name of the person
    this.name = RandomName.first() + ' ' + RandomName.last();
    // gender: 'm'/'f'
    this.gender = '';
    // position: The map position of the person
    this.position = {
      x: 0,
      y: 0,
      z: 0,
    };
    // direction: The rotation of the person (0-3)
    this.direction = 0;
    // destination: Where you want to go
    this.destination = this.position;
    // needs: 0-100 What needs does this person have? 100 means satisfied.
    this.needs = {
      hunger: 100, // food, time
      bladder: 100, // food, restroom, morning?
      stress: 100, // classes, homework, finals, food, social
      energy: 100, // classes, sitting down, food
      hygiene: 100, // showers, trash cans, recycling, plants, janitor
      social: 100, // parties, labs, people, music
    };
  }
}
export default Person;