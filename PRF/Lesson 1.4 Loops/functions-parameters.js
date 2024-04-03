// Sets a default value for y
function myFunction(x, y = 2) {
    console.log(y);
}
myFunction(1); //2
myFunction(1, 3); //3


// Dealing with more arguments than expected using the Arguments Object
function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
x = sum(1, 23, 45, 67, 89); //225


// Activity
/* Write a function that multiplies all arguments (we assume all are numbers) and returns the result. We should be able to pass as many arguments as we want. */
function multipleArguments() {
    let sum = 1;
    if (arguments.length === 0) {
        return 0;
    }

    for (let j = 0; j < arguments.length; j++) {
        sum *= arguments[j];
    }
    return sum;
};
let y = multipleArguments(2, 5, 7);
console.log(y);