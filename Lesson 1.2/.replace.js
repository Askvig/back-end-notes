let text = "My favourite book is \"Harry Potter\". I love this book so much.";
let result = text.replace("book", "movie");
console.log(result); //My favourite movie is "Harry Potter". I love this book so much.
result = text.replace(/book/g, "movie");
console.log(result); //My favourite movie is "Harry Potter". I love this movie so much.