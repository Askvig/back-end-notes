const my_array = [];
my_array[0] = "The First item";
my_array[1] = "The Second item";
my_array[2] = "The Third item";
my_array[3] = "The Fourth item";
console.log(my_array);
console.log(my_array[0]);

console.log(my_array.length); //4


const your_array = [];
your_array[0] = "The First item";
your_array[1] = "The Second item";
your_array[2] = "The Third item";
your_array[3] = "The Fourth item";
your_array[0] = "The new First item";
your_array[your_array.length - 1] = "The new Last item";
console.log(your_array);

var breakfast = ["coffee", "croissant"];
console.log(breakfast); // ["coffee", "croissant"]

var hodgepodge = [100, "paint", [200, "brush"], false];
console.log(hodgepodge); // [100, "paint", [200, "brush"], false]

var sisters = ["Tia", "Tamera"];
console.log(sisters[0]); // "Tia"

var actors = ["Felicia", "Nathan", "Neil"];
console.log(actors[actors.length - 1]); // "Neil"

var colors = ["red", "yelo", "blue"];
colors[1] = "yellow";
console.log(colors); // ["red", "yellow", "blue"]


/* Properties and methods */
["a", "b", "c", 1, 2, 3].length; // 6

["tortilla chips"].concat(["salsa", "queso", "guacamole"]); // ["tortilla chips", "salsa", "queso", "guacamole"]

["Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"].pop(); // "Pluto"

["John", "Kate"].push(8); // 3

["a", "b", "c"].reverse(); // ["c", "b", "a"]


const activity = ['Arne', 25, 'Blue'];
console.log(activity);



const firstName = [prompt(`What's your first name?`)];
const lastName = [prompt(`What's your last name`)];
const age = [parseInt(prompt(`What's your age?`))];
const array = firstName.concat(lastName, age);
console.log(array);