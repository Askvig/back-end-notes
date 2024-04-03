// indexOf() finds the first occurrence of specified text within the string.
let text = "My favourite book is \"Harry Potter\". I love this book so much.";
let result = text.indexOf("book");
document.writeln(result); //13

// There’s also a similar method, lastIndexOf(), which works analogically. However, it doesn’t find the first occurrence of a given string, but the last:
let text1 = "My favourite book is \"Harry Potter\". I love this book so much.";
let result1 = text.lastIndexOf("book");
document.writeln(result); //49

// Sometimes we don’t need an exact location of a given phrase within a string but only want to know if that string includes the phrase in question. In such a case, we have the following methods: includes(), startsWith() and endsWith().
let text2 = "My favourite book is \"Harry Potter\". I love this book so much.";
let result2 = text.startsWith("My");
let result3 = text.includes("My");
let result4 = text.includes("My", 4);
let result5 = text.endsWith("book");
document.writeln(result1); //true
document.writeln(result2); //true
document.writeln(result3); //false
document.writeln(result4); //false
