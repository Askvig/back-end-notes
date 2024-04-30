// Task 1
// setInterval(() => {
//     let currentFontSize = window
//         .getComputedStyle(document.getElementById("para1"), null)
//         .getPropertyValue("font-size");
//     const fontConversion = () => {
//         if (Math.random() > 0.5) {
//             currentFontSize * 2;
//         } else {
//             currentFontSize / 2;
//         }
//     }
//     let newFontSize = fontConversion(currentFontSize);
//     document.getElementById("para1").style.fontSize = newFontSize;
// }, 1000)


// Solution

// setInterval(() => {
    const currentFontSize = window
        .getComputedStyle(document.getElementById("para1"), null)
        .getPropertyValue("font-size");
    const parsedFontSize = parseFloat(currentFontSize.slice(0, -2));
    document.getElementById("para1").style.fontSize = (Math.random() > 0.5 ? parsedFontSize * 2 : parsedFontSize / 2).toString() + "px";
// }, 5000)

setInterval(() => {
    document.getElementById("para2").innerHTML = "Date: " + Date()
}, 10000)

setInterval(() => {
    if (Math.random() < 1/3) {
        document.getElementById("para3").style.backgroundColor = "yellow"
    } else if (Math.random() < 2/3) {
        document.getElementById("para3").style.backgroundColor = "magenta";
    } else {
        document.getElementById("para3").style.backgroundColor = "cyan";
    }
}, 3000)



// Task 2
document.getElementById("demo").innerHTML = "Number of images: " + document.images.length
function showDetails() {
    const firstImg = document.getElementsByTagName("img")[0];
    alert(`
    Image width: ${firstImg.style.width}
    Image height: ${firstImg.style.height}`);
    console.log(firstImg.style.width);
    console.log(firstImg.style.height);
}
console.log(document.getElementsByTagName("img")[0])
console.log(document.getElementsByTagName("img")[0].style)