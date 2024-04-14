// Class declaration
class Car {
    constructor (doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

const cx5 = new Car(4, 'V6', 'grey');


// Class expression
var Car1 = class {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

