function print(text) {
    document.write(text + "\n");
}
function calculator(a, b, callback) {
    let result = a + b;
    callback(result);
}
print("Waiting for the calculation to end...");
setTimeout(() => calculator(1, 2, print), 5000);
