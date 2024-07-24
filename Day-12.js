// Day 12: Error Handling 

// Task 1: write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError() {
    throw new Error("this is an error of any reason");
}
try {

    throwError();

} catch (error) {
    console.log(error);
}

// Task 2: create a function that divides two numbers and throws an error if the denominator is zero .use a try catch block to handle this error.

function chekZero(num1, num2) {
    if (num2 == 0) {

        throw Error(" second number is zero");
    }
    else console.log("this is right");
}
try {
    chekZero(2,0);

} catch (error) {
    console.log(error);
}

// Task 3: Create a script that includes a try-catch block and a finally block.log messages in the try . catch ,and finally blocks to observe the execulation flow.

try {
    console.log("this code is code");
    throw Error("this is normal err");

} catch (error) {
    console.log(error);

} finally {

    console.log("this code execute when throw err or not,")//finally is run when code is execute both time.
}

// Task 6: create a promise that randomly resolve of rejects. use .catch() to handle the rejection and log an appropriate message to the console. 

const promiseOne = new Promise((resolve, reject) => {
    let random = Math.random();
    setTimeout(() => {
        if (random > 0.5) {
            resolve("this code is done");
        }
        else {
            reject("code is not done");
        }
            console.log(random);
    }, 2000);
})

    .then((msg) => console.log(msg))
    .catch((err) => console.log(err))

// Task 7: use  try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the roorr message.

const promisetwo = new Promise((resolve, reject) => {
    let random = Math.random();
    setTimeout(() => {
        if (random > 0.3) {
            resolve("promise is done ");
        }
        else {
            reject("promise is not done");
        }
        console.log(random);
    }, 2000);
})
async function newfun() {
    try {
        let checawait = await promisetwo;
        console.log(checawait);
    } catch (error) {
        console.log(error);
    }
}
newfun();

// Task 8 : use the fetch API to request data from and invalid URL and handle the error using .catch() .log an appropriate error message to the console.

fetch("http://invalidURL")
    .catch(() => {
        console.log("url is not valid");
    })

// Task 9: use the fetch API to request data from and invalid URL within an async function and handle the error using try-catch .log an appropriate error message.

async function lastfun() {
    try {
        chekFetchPromise = await fetch("http://InvalidURL")
        console.log(checkpromise);
    } catch (error) {
        console.log("URL invalid check url again");
    }
}
lastfun();