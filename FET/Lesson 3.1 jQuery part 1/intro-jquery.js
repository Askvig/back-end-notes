// We’ll usually put all our jQuery methods inside a document-ready event:
// This prevents our code from running before our document finishes loading.
$("document").ready(function () {
    $("#content").append("<p>Hello World!</p>");
});
const element = document.getElementById("content");
const newElement = document.createElement("p");
const text = document.createTextNode("Welcome");
newElement.appendChild(text);
element.appendChild(newElement);
