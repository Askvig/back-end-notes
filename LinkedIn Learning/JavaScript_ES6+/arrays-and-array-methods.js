//Arrays and Array Methods

/* Spread operator */
// ...
let cats = ["Biscuit", "Jungle"];
let dogs = ["Stella", "Camper"];

let animals = ["Smoky", "Miro", "Swimmy", cats, dogs];
let animals1 = ["Smoky", "Miro", "Swimmy", ...cats, ...dogs];

console.log(animals);
console.log(animals1);



/* Destructuring arrays */
let cities = ["Spokane", "Boston", "Los Angeles", "Seattle", "Portland"];

console.log(cities);
console.log(cities[0]);

let [first, third, , , fifth] = [
    "Spokane",
    "Boston",
    "Los Angeles",
    "Seattle",
    "Portland",
];

console.log(first);
console.log(third);
console.log(fifth);



/* Searching arrays with .includes() */
console.log(cities.includes("Boston"));
console.log(cities.includes("New York"));
