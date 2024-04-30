const h1 = document.createElement("h1");
h1.innerHTML = "JavaScript HTML DOM";
document.body.appendChild(h1)

const p1 = document.createElement("p");
p1.innerHTML = "Add new HTML Element.";
document.body.appendChild(p1);

const p2 = document.createElement("p");
p2.innerHTML = "This is new.";
document.body.appendChild(p2);

const p3 = document.createElement("p");
p3.innerHTML = "This is a paragraph.";
document.body.appendChild(p3);

const p4 = document.createElement("p");
p4.innerHTML = "This is another paragraph.";
document.body.appendChild(p4);

function appendElement(tagName, content) {
    const element = document.createElement(tagName);
    element.innerHTML = content;
    document.body.appendChild(element);
}

appendElement("h1", "JavaScript HTML DOM");
appendElement("p", "Add new HTML Element.");
appendElement("p", "This is new.");
appendElement("p", "This is a paragraph.");
appendElement("p", "This is another paragraph.");