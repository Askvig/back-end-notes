/*
1) Load the data from the user (via prompt). You should get a number greater than 1 but less than 20. If the data from the user is incorrect, you should show them another prompt repeatedly until you get the correct number.
*/
// Attempt 1
// let userData = parseFloat(prompt("Please insert a number between 1 and 20."));
// while (userData < 1 || userData > 20) {
//     if (userData > 1 && userData < 20) {
//         break;
//     }
//     break;
// }

// Attempt 2
while (true) {
    let userData = parseFloat(
        prompt("Please insert a number between 1 and 20.")
    );
    if (userData >= 1 && userData <= 20) {
        alert(userData);
        break;
    }
}

// Solution
// while (true) {
//     let userData = parseFloat(prompt("Please provide a number between 1 and 20"));
//     if (userData > 1 && userData < 20) {
//         break;
//     }
// }

/*
2) Print all multiplicities of these positive integer numbers in the console that are less than 1000 and not multiplicities of 23. Which loop is best for our task?
*/

// Attempt 1
// for (let i = 0; i <= 1000; i++) {
//     if (i % 23 === 0) {
//         continue;
//     } else {
//         console.log(i % i === 0)
//     }
// }

// Solution
for (let i = 1; i <= 1000; i++) {
    if (i % 23 !== 0) {
        console.log(i);
    } else {
        console.log("Multiple of 23.");
    }
};
