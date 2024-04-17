/* Building promises */
console.log("Building promises:");

const delay = (seconds) =>
    new Promise((resolve) => setTimeout(resolve, seconds * 1000));

console.log("Zero seconds");
delay(1).then(() => console.log("one second"));
delay(5).then(() => console.log("5 seconds"));

const delay1 = (seconds) =>
    new Promise((resolve, reject) => {
        if (typeof seconds !== "number") {
            reject(new Error("seconds must be a number"));
        }

        setTimeout(resolve, seconds * 1000);
    });

// delay1('one').then(() => console.log("one second"));

/* Loading remote data with promises */
console.log(" ");
console.log("Loading remote data with promises:");

const spacePeople = () => {
    return new Promise((resolves, rejects) => {
        const api = "http://api.open-notify.org/astros.json";
        const request = new XMLHttpRequest();
        request.open("GET", api);
        request.onload = () => {
            if (request.status === 200) {
                resolves(JSON.parse(request.response));
            } else {
                rejects(Error(request.statusText));
            }
        };
        request.onerror = (err) => rejects(err);
        request.send();
    });
};

spacePeople().then(
    (spaceData) => console.log(spaceData),
    (err) => console.error(new Error("Can't load people"))
);

/* Returning promises with fetch */
console.log(" ");
console.log("Returning promises with fetch:");

let getSpacePeople = () =>
    fetch("http://api.open-notify.org/astros.json").then((res) => res.json());

let spaceNames = () =>
    getSpacePeople()
        .then((json) => json.people)
        .then((people) => people.map((p) => p.name))
        .then((names) => names.join(", "));

getSpacePeople().then(console.log);
spaceNames().then(console.log);

/* Using async/await syntax */
console.log(" ");
console.log("Using async/await syntax:");

const delay2 = (seconds) =>
    new Promise((resolves) => setTimeout(resolves, seconds * 1000));

const countToFive = async () => {
    console.log("zero seconds");
    await delay2(1);
    console.log("one seconds");
    await delay2(2);
    console.log("two seconds");
    await delay2(3);
    console.log("three seconds");
};

countToFive();

/* Incorporating fetch with async/await */
console.log(" ");
console.log("Incorporating fetch with async/await");

const githubRequest = async (login) => {
    let response = await fetch(`https://api.github.com/users/${login}`);
    let json = await response.json();
    let summary = `${json.name}, ${json.company}`
    console.log(summary);
};

githubRequest('Askvig');

console.log(" ");
