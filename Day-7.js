// Day-7: Objects

// Task 1:  create an object representing a book with properties like, author, and year and log the object to the book console.

const book1 = {
    title: "Computer science",
    author: "vansh kumawat",
    year: 2025
}
console.log(book1);

// Task 2: Access and log the title and author properties of the book object.

console.log("book1 title :", book1.title);
console.log("book1 author :", book1.author);

// Task 3: Add a method to the book object that returns a string with the book's title and author,and log the result of calling this method.

book1.det = function () {
    console.log(`The book ${this.title},by ${this.author}`);
}
console.log(book1.det());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property,then log the updatd object.

book1.cheyear = function (year) {
    book1.year = 2029
}
book1.cheyear(book1.year);
console.log(book1);

// Task 5: Create a nested object repersenting a library with properties like name and bookes(and array of books ojects),and log the libarary object to the cosole.

const library = {
    name: " kumawat Library",
    books: [
        {
            title: "chemistry",
            year: 2023
        },
        {
            title: "physics",
            year: 2023
        }
    ]
}
console.log(library);

// Task 6: Acces and log the name of the library and the titles of all the books in the library.

console.log("library name:",library.name);
library.books.forEach(book => {
    console.log("book title",book.title);
});

// Task 7: Add a method to th book object that uses the this key word to return a string with the book's title and year, and log the result of calling this method. 

book1.thisMethod=function(){
    console.log(`The book is : ${this.title} , published in ${this.year}`)
}
console.log(book1.thisMethod());

// Task 8: use for...in loop to iterate over the properties of book object and log each property and its value.

for (const keys in book1) {
  console.log("all keys of book1 :",book1[keys]);
}

// Task 9: use objes.keys and object.values methods to log all the keys and values of the book object.

console.log(Object.keys(book1));
console.log(Object.values(book1));
