const text = "My favourite book is \"Harry Potter\". I love this book so much."; // 0=My, 3=favourite, 13=book, 18=is, 21="Harry Potter", 37=I, 39=love, 44=this, 49=book, 54=so, 57=much


// Result: favourite book is “Harry Potter”
const resultText1 = text.slice(3, 35); 
console.log(resultText1);


// Result: My book is love.
const sampleText1 = text.slice(0, 3);
const sampleText2 = text.slice(13, 21);
const part = text.slice(21, 36);
const sampleText3 = part.replace('"Harry Potter"', 'love');
const resultText2 = sampleText1 + sampleText2 + sampleText3;
console.log(resultText2);


// Result: My book is “HARRY POTTER”.
const sampleText4 = text.replace(" favourite ", " ");
const sampleText5 = (sampleText4.slice(12, 24)).toUpperCase();
const sampleText6 = sampleText4.replace("Harry Potter", sampleText5);
console.log(sampleText6.slice(0, 26));


// Result: potter harry
const sampleText7 = (text.slice(22, 27)).toLowerCase();
const sampleText8 = (text.slice(28, 34)).toLowerCase();
const resultText4 = `${sampleText8} ${sampleText7}`;
console.log(resultText4);