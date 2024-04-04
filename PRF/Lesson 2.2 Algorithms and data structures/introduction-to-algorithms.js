// A standard function that counts down in the console
const countdown = (value) => {
    for (let i = value; i > 0; i--) {
        console.log(i);
    }
};
countdown(10);


// The same function as above, but with recursion
const countdown1 = (value) => {
    console.log(value);
    const newValue = value - 1;
    if (newValue > 0) {
        countdown1(newValue);
    }
};
countdown1(10);


// Instead of iterating through values, we only print the value once. If we’re still above 0, we run our function for the 1 smaller value. The function will run 10 times until we don’t meet the condition:


// The function reversed
const countDownRev = (value) => {
    const newValue = value - 1;
    if (newValue > 0) {
        countDownRev(newValue);
    }
    console.log(value);
};
countDownRev(10);

