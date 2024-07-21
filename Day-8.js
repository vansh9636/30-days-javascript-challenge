// Day-8: ES6 + Freatures 

// Task 1: Use template literals to create a string that inclucdes variables for a person's name and age, and log the string to the console.

let myname = "vansh Kumawat";
let age = 19;

console.log(`hey I am ${myname} and i am ${age} old`);

// Task 2: Create a multi-line string using template literals and log it to the console.

console.log(`this is a 8 day of my js challenge`);

// Task 3: use array destructuring to extract the first and second elements from array of numbers and log them to the console.

let anArray = [1, 2, 3, 4, 5];
let [idx0, idx1, idx2] = anArray;//we store value of array in the variable.
console.log(idx0);
console.log(idx1);
console.log(idx2);

// Task 4: Use object destructuring to extract the title and author form a book object and log them to the console.


let book = {
    title: "chess : The end game",
    author: "Prag",
}
let { title, author } = book;//we store value of object element.

console.log(`hey ${title} , author is ${author}`);

// Task 5: Use the spread operator to create a new array that includes all emelments of an existing array plus additional elements , and log the new array to the console.

let sprArray = [12, 23, 34, 45];
let aprArray2 = [65, 35, 25, 13];

const newAddArray = [...sprArray, ...aprArray2, 11, 22];
console.log(newAddArray);

// Task 6 : Use the rest operator in a function to accept an arbitrary number of arguments, sum them , and return the result.

let restFun = function (...c) {
    let sum = 0;
    for (value of c) {
        sum += value;
    }
    return console.log(sum)
}
restFun(23, 9, 6, 45, 34)

// Task 7: Write a function that takes parameters and returns their product, with the second parameter having a default value of 1. log the result of calling this function with and without the second parameter.

function defpera(a, b = 9) {
    return a + b;
}
console.log("with two pera ",defpera(5,4))
console.log("here use of default pera",defpera(4))

// Task 8:  Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let bookTitle="js night";
let bookAuthor="vassu";
let bookYear=2030;

const books={
    bookTitle,
    bookAuthor,
    bookYear,
    bookdets: function(){
        return this.bookTitle;
    }
}
console.log(books);
console.log(books.bookdets());

// Task 9: Create an object with computed property names based on variables and log the object to console.

let comName="Hp intel 9 ";
let pubYear=2023;
const computed={
    comName,
    pubYear
}
console.log(computed);