/* string.repeat */
console.log("string.repeat():");

let yell = "woo!";

let party = yell.repeat(20);

console.log(party);

let cat = {
    meow(times) {
        console.log("meow".repeat(times));
    },
    purr(times) {
        console.log("prrr".repeat(times));
    },
    snore(times) {
        console.log("ZzZzZ".repeat(times));
    },
};

cat.meow(3);
cat.purr(5);
cat.snore(7);



/* Setting default function parameters */
console.log(" ");
console.log("Setting default function parameters:");

function add(x = 5, y = 6) {
    console.log(x + y);
}

add();
add(2, 3);

function haveFun(activityName = "hiking", time = 3) {
    console.log(`Today I will go ${activityName} for ${time} hours.`);
}

haveFun("biking", 2.5);
haveFun();
haveFun("cycling");
haveFun(4);
// haveFun(, 7);



/* Arrow functions */
console.log(" ");
console.log("Arrow functions:");

let studentList = function (students) {
    console.log(students);
};

studentList(["A", "B", "C"]);

let teacherList = (teachers) => console.log(teachers);
teacherList(["F", "E", "D"]);

let list = ["apple", "banana", "strawberry"];
list.map((item) => console.log(item));



/* Understanding "this" in arrow functions */
console.log(" ");
console.log('Understanding "this" in arrow functions:');

// No arrow function
let person = {
    first: "Angie",
    hobbies: ["bike", "hike", "ski"],
    printHobbies: function () {
        let _this = this;
        this.hobbies.forEach(function (hobby) {
            let string = `${_this.first} likes to ${hobby}`;
            console.log(string);
        });
    },
};

person.printHobbies();

// With arrow function
let human = {
    first: "Susan",
    hobbies: ["climb", "run", "swim"],
    printHobbies: function () {
        this.hobbies.forEach((hobby) => {
            let string = `${this.first} likes to ${hobby}`;
            console.log(string);
        });
    },
};

human.printHobbies();



/* Generators */
console.log(" ");
console.log("Generators:");

function* director() {
    yield "Three";
    yield "Two";
    yield "One";
    yield "Action";
}

let countdown = director();

console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next());
