/* // Continue
for (let i = 0; i < 10; i++) {
    if (i == 4) {
        continue;
    }
    console.log(i);
}


// Break
let i = 0;
while (true) {
    i++;
    if (i >= 10) {
        break;
    }
    console.log(i);
} */


// Activity
/* let prompt = parseFloat(prompt('Type an even number'));
for (number = 1; number++;) {
    document.writeln(number)
    if (prompt % 2 === 0) {
        break;
    }
}

console.log('Hey');
*/

while (true) {
    let result = prompt('Please provide an even number');
    if (result % 2 === 0) {
        alert(result);
        break;
    }
}