const nameEx = "Foo Bar";

enum Gender {
  MALE,
  FEMALE,
}

interface Person {
  name: string;
  gender: Gender;
  age?: number;
  jobs?: string[];
}

interface Vehicle {
    drive: () => void
}

class Greeter {
  // parent class
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log("hello " + this.name);
  }
}

class PersonGreeter extends Greeter {
  // child class
  private gender: Gender;
  private age?: number;

  constructor(person: Person) {
    super(person.name);
    this.gender = person.gender;
    this.age = person.age;
  }

  iAmGender() {
    console.log(
      this.name +
        " is of gender " +
        (this.gender === Gender.MALE ? "male" : "female")
    );
  }

  isMinor(): boolean {
    if (!!this.age && this.age < 18) {
      return true;
    } else {
      return false;
    }
  }
}

class Bike implements Vehicle {
    drive = () => {
        console.log("the bike is driving")
    };
}

class Car implements Vehicle {
    drive = () => {
        console.log("the car is driving");
    }
}

abstract class BigVehicle implements Vehicle {
    abstract numberOfWheels: number;
    drive = () => {
        console.log("big vehicle is turning " + this.numberOfWheels + " wheels!")
    }
}

class Bus extends BigVehicle {
    numberOfWheels = 8;
}

class Truck extends BigVehicle {
    numberOfWheels = 16;
}

const helloTraditionalFunction = function() {
    console.log("hello traditional function");
}

const helloWorldFunction = () => {
    console.log("hello world!");
}

const nicolasGreeter = new Greeter("Nicolas");
const jerreGreeter = new Greeter("Jerre");
const personFooBar: Person = {
  name: "Foo Bar",
  gender: Gender.MALE,
  age: 17,
};

const personWithoutAge: Person = {
  name: "Without Age",
  gender: Gender.FEMALE,
};

const foo = {name: "Jefke", gender: Gender.MALE, job: "iets"};

const personGreeter = new PersonGreeter(foo as Person);
const personWithoutAgeGreeter = new PersonGreeter(personWithoutAge);

nicolasGreeter.greet(); // "Hello Nicolas"
jerreGreeter.greet(); // "Helle Jerre"
personGreeter.greet(); // "Hello Foo Bar"
personGreeter.iAmGender(); // Foo Bar is of gender MALE
console.log(personGreeter.isMinor()); // false
console.log(personWithoutAgeGreeter.isMinor()); // false
helloTraditionalFunction();
helloWorldFunction();
const bus = new Bus();
bus.drive();
const truck = new Truck();
truck.drive();