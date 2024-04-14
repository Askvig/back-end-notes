/* Enhancing object literals */
console.log("Enhancing object literals:");

// Without
function skier(name, sound) {
    return {
        name: name,
        sound: sound,
        powderYell: function () {
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}!`);
        },
    };
}

console.log(skier("Sendy", "woo"));
console.log(skier("Sendy", "woo").name);
skier("Sendy", "woo").powderYell();

// With
function skier1(name, sound) {
    return {
        name,
        sound,
        powderYell: function () {
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}!`);
        },
    };
}

skier1("Arnaud", "Yeah").powderYell();



/* Creating objects with the spread operator */
console.log(" ");
console.log("Creating objects with the spread operator:");

// Without
const daytime = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly",
};

const nighttime = "mac and cheese";

const backpackingMeals = {
    daytime,
    nighttime,
};

console.log(backpackingMeals);

// With
const backpackingMeals1 = {
    ...daytime,
    nighttime,
};

console.log(backpackingMeals1);



/* Destructuring objects */
console.log(" ");
console.log("Destructuring objects:");

const sandwich = {
    title: "Reuben",
    price: 7,
    description: "A classic",
    ingredients: ["bread", "corned beef", "dressing", "sauerkraut", "cheese"],
};

console.log(sandwich.title);
console.log(sandwich.price);

const { title, price } = {
    title: "Reuben",
    price: 7,
    description: "A classic",
    ingredients: ["bread", "corned beef", "dressing", "sauerkraut", "cheese"],
};

console.log(title);
console.log(price);

const vacation = {
    destination: "Chile",
    travelers: 2,
    activity: "skiing",
    cost: "too much",
};

// function marketing({ destination, activity }) {
//     return `Come to ${destination} and do some ${activity}`;
// }

// marketing();



/* For/of loop */
console.log(" ");
console.log("For/of loops:");

for (let letter of "JavaScript") {
    console.log(letter);
}

let topics = new Map();
topics.set("HTML", "/topic/html");
topics.set("CSS", "/topic/css");
topics.set("JavaScript", "/topics/javascript");

for (let topic of topics.keys()) {
    console.log(topic);
}

for (let route of topics.values()) {
    console.log(`The course description can be found at ${route}`);
}

for (let topic of topics.entries()) {
    console.log(topic);
}



/* Classes */
console.log(" ");
console.log("Classes:");

class Vehicle {
    constructor(description, wheels) {
        this.description = description;
        this.wheels = wheels;
    }
    describeYourself() {
        console.log(`I am a ${this.description} with ${this.wheels} wheels.`);
    }
}

let coolSkiVan = new Vehicle("cool ski van", 4);

console.log(coolSkiVan);
coolSkiVan.describeYourself();



/* Inheritance with classes */
console.log(" ");
console.log("Inheritance with classes:");

class SemiTruck extends Vehicle {
    constructor() {
        super("semi truck", 18);
    }
}

let groceryStoreSemi = new SemiTruck();
groceryStoreSemi.describeYourself();



/* Getting and setting class values */
console.log(" ");
console.log("Getting and setting class values:");

let attendance = {
    _list: [],
    set addName(name) {
        this._list.push(name);
    },
    get list() {
        return this._list.join(", ");
    },
};

attendance.addName = "Joanne Starr";
console.log(attendance.list);
attendance.addName = "Bill Benkelman";
attendance.addName = "Charlie Charlson";
console.log(attendance.list);

class Hike {
    constructor(distance, pace) {
        this.distance = distance;
        this.pace = pace;
    }
    get lengthInHours() {
        return `${this.calcLength()} hours`;
    }
    calcLength() {
        return this.distance / this.pace;
    }
}

const mtTallac = new Hike(10, 2);

console.log(mtTallac.lengthInHours);
