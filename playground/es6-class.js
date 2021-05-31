class Person {
  constructor(name = 'Anyonmous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, This is ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if (!this.major) {
      return description;
    }
    return `${description} and also has completed ${this.major}`;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += `, I am from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Traveller('Sharath Kumar', 25, 'Karur');
console.log(me);
console.log(me.getGreeting());

const other = new Traveller('', 0, 'Chennai');
console.log(other.getGreeting());
