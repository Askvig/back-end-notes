// forEach() method
/* Calls a callback function once for every array element */
const numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(callback);
function callback(value, index) {
    return console.log("value: ", value, "index: ", index);
}

// map method
/* Modifies every element of our array. This doesn't affect our input array */
const numbers1 = [1, 2, 3, 4, 5, 6];
const newNumbers1 = numbers1.map(myFunction);
console.log(numbers1); //[1, 2, 3, 4, 5, 6]
console.log(newNumbers1); //[2, 4, 6, 8, 10, 12]
function myFunction(value) {
    return value * 2;
}

// filter method
/* Checks every element if it fits our condition */
const numbers2 = [1, 2, 3, 4, 5, 6];
const even = numbers2.filter(isEven);
console.log(numbers2); //[1, 2, 3, 4, 5, 6]
console.log(even); //[2, 4, 6]
function isEven(value) {
    return value % 2 == 0;
}

// reduce method
/* Takes four parameters and returns one value */
const numbers3 = [1, 2, 3, 4, 5, 6];
const sum = numbers3.reduce(add);
console.log(numbers3); //[1, 2, 3, 4, 5, 6]
console.log(sum); //21
function add(total, value) {
    return total + value;
}

// Activity
const colors = [];
const color1 = prompt("Name the first color");
const color2 = prompt("Name the second color");
const color3 = prompt("Name the third color");
colors.push(color1, color2, color3)
const capitalColors = colors.map(function(color) {
    return color.toUpperCase();
});
console.log(colors)
console.log(capitalColors)
console.log(capitalColors[0])
console.log(capitalColors[1])
console.log(capitalColors[2])