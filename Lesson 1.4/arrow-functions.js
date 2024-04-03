const x = (x, y) => x * y;


// Curly brackets must be added if the function consist of more than one statement
const y = (x, y) => {return x * y};


// Arrow function with the rest parameter (...args). Arrow functions don't have binding to the Arguments Object
var add = (...args) => {
    var total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
};
