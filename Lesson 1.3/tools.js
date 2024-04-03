let x = Math.random();
if (x > 0.5) {
    console.log("Hello, it's nice to see you here.");
} else {
    console.log(x);
}

// You should use the alert method when you want to give the user plain information, while it’s better to use the confirm method if you want to provide the user with a choice.
let y = Math.random();
if (y > 0.5) {
    alert("Hello, it's nice to see you here.");
} else {
    confirm(y);
}
