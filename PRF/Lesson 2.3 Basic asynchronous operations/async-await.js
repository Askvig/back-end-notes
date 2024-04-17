// The async keyword makes a function return a Promise. Await makes a function wait for a Promise.
function print(text) {
    document.write(text + "\n");
}
async function display() {
    let myPromise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Hello!");
        }, 3000);
    });
    const result = await myPromise;
    print(result);
    console.log(result); // "Hello!"
    console.log(myPromise); // Promise: ...
}
display();


/* Instead of using the then() method, we can access the result quickly with the await keyword.
It will be accessible after our promise resolves. Remember, we can use the await keyword only inside an async function. */

/* Async and await are truly powerful, but we can’t always do the same thing as with promises.
For example, we can’t use them to recreate the example from the previous section.
Await on errors will always throw the rejected value, but in our promises example, we could print it. */