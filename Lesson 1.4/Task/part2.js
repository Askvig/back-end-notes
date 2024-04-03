/*
In this lesson, we learnt about the functions, function expressions and arrow functions. We also finally used functions to improve our web application.

In this task, we’ll continue the development of our web application:

In the beginning, get the input value from the user. The value should be between 0 and 100. Create two buttons and apply two functions to them on click: one will increase the stored value by 1, while the second function will decrease it.

After every button click, show the current variable value in the console. After reaching either 0 or 100, instead of increasing/decreasing the value, communicate “Game over” in the console.
*/

let value = parseFloat(prompt("Choose a number between 1 and 100."));
const increment = () => {
    if (value >= 99) {
        console.log('Game Over')
    } else {
        value++;
        console.log(value);
    }
};
const decrement = () => {
    if (value <= 1) {
        console.log("Game Over");
    } else {
        value--;
        console.log(value);
    }
};
