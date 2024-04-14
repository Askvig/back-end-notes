let length;
length = -4

if (isNaN(length) || length > 1) {
    console.log(1)
}

if (isNaN(length) && length <= 0) {
    console.log(2)
}

if (isNaN(length) || length <= 0) {
    console.log(3)
}

if (!isNaN(length) && length > 0) {
    console.log(4)
}
