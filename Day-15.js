// Day 15: closure 

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

const outerFun = () => {
    const outerVar = 'its a outer variable'

    const innerFun = () => {
        console.log(outerVar)
    }
    return innerFun
}

const innerFunction = outerFun()
innerFunction()

// Task 2: Create a closure that maintains a pricate counter .implement functions to increment and get the surrent calue of the counter.

const counterFun = () => {
    let count = 0

    const increase = () => {
        count++
    }
    const countval = () => {
        return count
    }

    return { increase, countval };
}

let counter = counterFun();
counter.increase()
counter.increase()
counter.increase()
console.log("final val of count :",counter.countval()); 

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

const idFun = () => {
    let Id = 101

    const generateId = () => {
        return Id++
    }

    return generateId
}

const id = idFun()
console.log(id())
console.log(id())
console.log(id())

// Task 4: create a closure that captures a user's name and returns a function that greets the user by name ;

const user = (name) => {
    const greet = () => {
        console.log(`Hello ${name}, what's going on your coding ?`);
    }

    return greet
}

const userName = user('vansh');
userName();

// Task 5: write a loop that creates an array of functions. Each function should log its index when called Use a closure to ensure each function logs the corrext index.

const loopClosure = () => {
    const functions = []

    for (let i = 0; i < 5; i++) {
        functions.push(() => {
            console.log(i)
        })
    }

    return functions
}

const functions = loopClosure()
functions.forEach(func => func());

