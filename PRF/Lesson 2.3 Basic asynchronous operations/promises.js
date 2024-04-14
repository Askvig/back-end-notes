// Promises enable us to link producing (can take time) and consuming (must wait for the result) code.
// Syntax:
let promise = new Promise(function (resolve, reject) {
    // "Producing Code" (May take some time)

    resolve(); // when successful
    reject(); // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
promise.then(
    function (value) {
        /* code if successful */
    },
    function (error) {
        /* code if some error */
    }
);


/* Promises support two properties: state and result.
There are three possible states:
1) Pending: Our producing code is still executing, and we don’t have a result yet – promise.result equals undefined.
2) Fulfilled: The producing code is executed correctly, and the resolve function will execute – promise.result is a result value.
3) Rejected: The producing code produced an error, and the reject function will execute – promise.result is an error object. */


/*We can’t access state and result properties ourselves, as they change without our knowledge.
We must use a promise method to handle this. */


/* We use a promise method by specifying callbacks for success and another for failure within Promise.then().
Regardless of parameter names, the first function will execute after success, while the second after failure.
Both are optional. The same applies to resolve and reject functions. */


// Let’s look at a basic example showing that our Promises are asynchronous:
console.log("a");
new Promise(function () {
    console.log("b");
    setTimeout(function () {
        console.log("D");
    }, 0);
});
// Other synchronous stuff, that possibly takes a very long time to process
console.log("c");


/* Unlike other programming languages, JavaScript offers only one thread. Because of this, our code won’t be truly asynchronous.
However, it can change the order of code execution.
In this case, we have our logs in order: a, b, c, D. It shows that after seeing the timer, our program did other things instead of waiting. */


// Let’s look at a more detailed example, including handling the result:
function print(text) {
    document.write(text + "\n");
}
let promise1 = new Promise(function (resolve, reject) {
    let x = 0;
    if (x == 0) {
        resolve("OK");
    } else {
        reject("Error");
    }
});
promise1.then(
    function (value) {
        print(value);
    },
    function (error) {
        print(error);
    }
);

// Our browser prints “OK” for now, but if we change the x to any other value, the text will change to “Error”.
