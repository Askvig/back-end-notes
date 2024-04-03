let isLessThanTen = true;
let i = 0;
while (isLessThanTen) {
    i++;
    if (i < 10) {
        isLessThanTen = true;
    } else {
        isLessThanTen = false;
    }
    console.log(isLessThanTen);
}


// do-while loop
/* Will always execute the first iteration */
/* do {
    // code block to be executed
} while (condition); */


// Activity
const numbers = [];
for (let i = 1; i <= 20; i++) {
    numbers.push(i);
}
for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] % 7 === 0 && numbers[j] !== 7) {
        console.log(numbers[j]);
        console.log(`Found first multiplicity of 7!: ${numbers[j]}`);
        break;
    } else {
        console.log(numbers[j]);
    }
}
