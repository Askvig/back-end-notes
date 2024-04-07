/* In this lesson, we learned about new data structures.
We also learned what an algorithm is and gained insight into three basic sorting algorithms.
We saw that JavaScript offers a good alternative – a sort() function.

In this task, you’ll have to sort the numbers, but to make it more interesting, you won’t sort them from smallest to greatest.
First, you need to get two numbers from the user. You can use prompts to do that.
Both need to be positive integers. The bigger one defines the size of your array. */


// We can generate the array of the provided size this way:
const numbers = Array.from(Array(10).keys()); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

/* We want to sort all elements by the remainder when dividing by the second, smaller parameter.
If the remainder is the same for two numbers, the smaller one should be before the greater one.
We can get the remainder through the modulo operator: */
console.log(11%4); // 3

// Our sorted array will look this way for the size of the array equal to 10 and second parameter 3:
[0, 3, 6, 9, 1, 4, 7, 2, 5, 8];

// Please print the result in the console.

/* You should implement sorting in two ways:
    1) Using any of the basic sorting algorithms mentioned in this lesson or any other sorting algorithm found on the Internet that is no less optimal.
    2) Using the sort() method.
*/

/*
1. Get two positive numbers from the user. (prompts)
2. The biggest number defines the size of the array.
*/
const number1 = prompt('Please enter the first number:');
const number2 = prompt('Please enter the second number:');
