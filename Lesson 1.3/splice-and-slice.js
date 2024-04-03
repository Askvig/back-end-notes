// Slice method
const numbers = [1,2,3,4,5,6];
const newNumbers = numbers.slice(1,3);
console.log(numbers); // [1, 2, 3, 4, 5, 6]
console.log(newNumbers); // [2, 3]

const numbers1 = [1,2,3,4,5,6];
const newNumbers1 = numbers1.slice(-3);
console.log(numbers1); // [1, 2, 3, 4, 5, 6]
console.log(newNumbers1); // [4, 5, 6]


// Splice method
const numbers2 = [1,2,3,4,5,6];
numbers2.splice(2,1,7,8);
console.log(numbers2); // [1, 2, 7, 8, 4, 5, 6]

// Activity
const number1 = parseInt(prompt(`What's the first number?`));
const number2 = parseInt(prompt(`What's the second number?`));
const number3 = parseInt(prompt(`What's the third number?`));

let array = [number1, number2, number3];
array.splice(1, 1);
array.push((array[0] + array[1]) / 2);

console.log(array);4