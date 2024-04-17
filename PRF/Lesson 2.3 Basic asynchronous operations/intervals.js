// Let’s make a dynamic timer, increasing every two seconds:
function print(text) {
    document.write(text + "\n");
}
function timer(callback) {
    counter++;
    callback(counter);
}
print("Waiting...");
var counter = 0;
setInterval(() => timer(print), 2000);


/* The setInterval method returns us an id of our interval.
If we want to stop the interval, we can use the clearInterval() method and pass that id as the parameter. */


// Let’s modify our code so the counter stops after 30 seconds:
function print(text) {
    document.write(text + "\n");
}
function timer(callback) {
    counter++;
    callback(counter);
}
print("Waiting...");
var counter = 0;
const id = setInterval(() => timer(print), 2000);
setTimeout(() => clearInterval(id), 30000);