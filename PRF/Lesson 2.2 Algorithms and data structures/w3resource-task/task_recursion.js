// https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php

// Task 1

/* Write a JavaScript program to calculate the factorial of a number.
In mathematics, the factorial of a non-negative integer n, denoted by n!,
is the product of all positive integers less than or equal to n.
For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 */

// Shitty attempt
const factorial = (value) => {
    console.log(value);
    let newValue = value - 1;
    if(newValue <= 0) {
        console.log('Finished');
    }
}
factorial(5);

// Solution:
const factorial1 = (x) => {
    if (x === 0) {
        return 1;
    }
    return x * factorial1(x - 1);
}
console.log(factorial1(5)); // 120

const factorial2 = (x, result = 1) => {
    if (x === 0 || x === 1) {
        return result;
    }
    return factorial2(x - 1, x * result);
}
console.log(factorial2(5)); // 120


// Task 2

/* Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion. */




// Task 3

/* Write a JavaScript program to get integers in the range (x, y) using recursion.
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8] */

// Task 4

/* Write a JavaScript program to compute the sum of an array of integers.
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21 */

