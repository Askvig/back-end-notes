// Binding a function as the attribute
function changeText(id) {
    id.innerHTML = "Ooops!";
}

// Bind an event to the element
function changeMyHeader() {
    document.getElementById("myHeader").innerHTML = "Ooops!";
}
document.getElementById("myHeader").onclick = changeMyHeader;

// addEventListener() method can bind as many functions as possible to any DOM element using DOM and event listeners
document.getElementById("myHeader3").addEventListener("click", myFunction);
function myFunction() {
    alert("Hello Paragraph 3!");
}

// We can add as many listeners to one event as we want
document.getElementById("myHeader4").addEventListener("click", myFunction1);
document.getElementById("myHeader4").addEventListener("click", myFunction2);
function myFunction1() {
    alert("Hello Paragraph 4!");
}
function myFunction2() {
    console.log("Hello Paragraph 4!");
}

// Create event listener to the window object
window.addEventListener("resize", myFunction3);
function myFunction3() {
    alert("Resizing");
}

// Use an arrow function that calls another function with the parameter inside
window.addEventListener("resize", () => myFunction4("Matt"));
function myFunction4(name) {
    alert("Hello " + name + " !");
}

/* 
Event propagation is a way of defining the element order when an event occurs.

There are two ways of propagating events in the HTML DOM: bubbling and capturing:
Bubbling is about the inner elements being handled first and the outer last.
Capturing is about capturing the outer elements first and then the inner ones.
By default, events are propagated by bubbling. However, we can specify which to use by passing the third parameter: useCapture.
 */

document.getElementById("para1").addEventListener("click", function() {
        alert("You clicked the blue element!");
        }, false);

        document.getElementById("myDiv1").addEventListener("click", function() {
        alert("You clicked the yellow element!");
        }, false);

        document.getElementById("para2").addEventListener("click", function() {
        alert("You clicked the blue element!");
        }, true);
        document.getElementById("myDiv2").addEventListener("click", function() {
        alert("You clicked the yellow element!");
        }, true);

// Activity
document.getElementById("button1").addEventListener("click", changeButtonText);

function buttonClick() {
    alert("Hello World!")
}

function changeButtonText() {
    this.innerHTML = "Clicked";
}