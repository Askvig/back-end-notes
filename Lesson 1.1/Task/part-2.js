let a = "a" + 1 + 2 + 1.2; // Guess: NaN
let b = 1 + 1.2 + "a" + 1; // Guess: NaN
let c = "" == 0; // Guess: NaN
let d = !(1 + 2 == 3) || !(2 > 4); // Guess: False
let e = 0.1 + 0.2; // Guess: 0.3
let f = 9 % 2 ** 3; // Guess: 1
let g = -1 / 0; // Guess: 0

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);