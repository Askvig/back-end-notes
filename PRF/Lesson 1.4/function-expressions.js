// The function doesn't need a name because it uses the variable. Functions without names are also called anonymous functions.
const x = function (a, b) {
    return a * b;
};
let z = x(3, 4);


// Activity
/* Write a function expression that multiplies all arguments (we assume all are numbers) and returns the result. We should be able to pass as many arguments as we want. */
const functionExpression = function () {
    let sum = 1;
    if (arguments.length === 0) {
        return 0;
    }

    for (let i = 0; i < arguments.length; i++) {
        sum *= arguments[i];
    }
    return sum;
}

console.log(functionExpression(3, 4, 23));