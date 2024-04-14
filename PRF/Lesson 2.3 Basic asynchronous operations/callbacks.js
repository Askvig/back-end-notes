function print(text) {
    document.write(text + "\n");
}
function concat(name, surname, callback) {
    let result = name + " " + surname;
    callback(result);
}
concat("Steven", "Bottom", print);

// Activity
function print1(text) {
    document.write(text + "\n");
}
function halve(value) {
    return value / 2;
}
function calculator(a, b, callback1, callback2) {
    let result = a + b;
    result = callback2(result);
    callback1(result);
}

calculator(1, 2, print1, halve);