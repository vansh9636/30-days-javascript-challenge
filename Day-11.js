// Day 11: promises and Async/Await 

// Task 1: create a promise that resolves with a message after a 2-secsond timeout and lot the message to the console.

const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task is compelete");
        resolve();
    }, 2000);
});

promiseOne.then(function () {
    console.log("promise is consumed");
});

// Task 2: create a promise that rejects with an error message after a 2-secsond timeout and handle the error using.catch();

const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (error) {
            reject();
        }
    }, 2000);
}).catch(function () {
    console.log("Something went worng");
})

// Task 3: create a sequence of promises that simulate fatching data from a serve.Chain the promises to log messages in a specific order.

const promisethree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let dets = {
            name: "vansh",
            uid: "vassu123",
            age: 19,
            course: "js challenge"
        }
        if (dets) {
            resolve(dets);
        }
        else reject("something went wrond");
    }, 5000)
});
promisethree
    .then((data) => {
        console.log(data.name, data.course);
        return { uname: "vansh", age: 19 }
    })
    .then((data) => {
        console.log(data.uname);
        return { age: 19 };
    })
    .then((data) => {
        console.log(data.age);
    })
    .catch();

// Task 4: write an async function that waits for a promise to resole and then logs the resolved value.

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) resolve("code is done")
        else reject("something went worng");
    }, 2000)
});
async function checkpromise() {
    try {
        let awaitMehod = await promiseFour;
        console.log(awaitMehod);
    } catch (error) {
        console.log(error);
    }
}
checkpromise();

// Task 5: write an async function handles a rejectd promise using try-catch and loges the error message.

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) resolve("code is done")
        else reject("something went worng");
    }, 2000)
});
async function checktwo() {
    try {
        let awaitwo = await promiseFive;
        console.log(awaitwo);
    } catch (error) {
        console.log(error);
    }
}
checktwo();

// Task 6: use the fatch API to get data from a public API and log the response data to the console using promises .

fetch("https://jsonplaceholder.typicode.com/users")
    .then((respo) => respo.json())
    .then((data) => console.log("Response 1", data))
    .catch((err) => console.log(err));

// Task 7: Use the fetch API to get data from a public API and log yhe  response data to the console using asunc/await;
const promiseSix = async () => {
    try {
        let respoLast = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await respoLast.json();
        console.log("Promise Six", data);
    } catch (err) {
        console.log(err);
    }
};

promiseSix();
