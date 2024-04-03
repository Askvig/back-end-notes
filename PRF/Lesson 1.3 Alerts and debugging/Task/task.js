let x = prompt("Please pass the number between 0 and 1", "0.5");
if (x > 1 || x < 0) {
    prompt("Try again");
    console.log(x)
} else if (x > 0.5) {
    alert("Hello, it's nice to see you here.");
    console.log(x);
} else {
    alert(x);
    console.log(x);
}


// Solution
/* let x = parseFloat(prompt("Please pass the number between 0 and 1", "0.5"));
if (typeof(x) != 'number' || x < 0 || x > 1) {
    x = parseFloat(prompt('Please pass the number between 0 and 1', '0.5'))
}

if (isNaN(x) || x < 0 || x > 1) {
    alert('Your data is not correct!');
} else if (x > 0.5) {
    alert(`Hello, it's nice to see you here.`);
} else {
    alert(x);
}
*/