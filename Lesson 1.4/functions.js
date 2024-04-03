function multiply(a, b) {
    return a * b;
}

multiply(1, 2);

let x = multiply(1, 2); //x = 2
let text1 = "One times two equals " + x;
let text2 = "One times two equals " + multiply(1, 2);

console.log(x);
console.log(text1);
console.log(text2);


// Activity
function addNumbers (a, b, c) {
    return a + b + c;
}

console.log(addNumbers(2, 4, 3))