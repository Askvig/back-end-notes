const colors = [];
const color1 = prompt("Enter the first color");
const color2 = prompt("Enter the second color");
const color3 = prompt("Enter the third color");
colors.push(color1, color2, color3);
const uppercaseColors = colors.map(function (color) {
    return color.toUpperCase();
});

console.log("Colors in capital letters");
console.log(uppercaseColors[0]);
console.log(uppercaseColors[1]);
console.log(uppercaseColors[2]);
