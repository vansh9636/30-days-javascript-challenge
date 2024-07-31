// Day 19:  Regular Expressions

//Task 1: Write a regular experssion to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

const text = "JS is best.JS for web development. JS is easy to learn.";
const regex = /JS/g;
const matches = text.match(regex);
console.log(matches);

//Task 2: Write a regular experssion to match all digits in a string. Log the matches.

const text2 = "i am 19 year old and birth year is 2005";
const regex2 = /\d+/g;
const matche2 = text2.match(regex2);
console.log(matche2);


//Task 3: Write a regular experssion to match all words in a string that start with a capital letter. Log the matches.

const text3 = "Hello World! JavaScript is use for webdev.JsChallenge.";
const regex3 = /\b[A-Z][a-zA-Z]*\b/g;
const matche3 = text3.match(regex3);
console.log(matche3);

//Task 4: Write a regular experssion to match all sequences of one or more digits in a string. Log the matches.

const text4 = "india call code +91 , and 10 digit ";
const regex4 = /\d+/g;
const matche4 = text4.match(regex4);
console.log(matche4);

//Task 5: Write a regular expression to capture the area code, central office code, and line number from a US Phone number format(e.g., (123) 456-7890). Log the captures 

const text5 = "call at (405) 345-6435 or (535) 543-1956 for more help.";
const regex5 = /\((\d{3})\) (\d{3})-(\d{4})/g;
const matches5 = [...text5.matchAll(regex5)];
matches5.forEach(match => {
    const [fullmatch, areaNO, officeCode, lineNO] = match;
    console.log(`Full match: ${fullmatch}`);
    console.log(`Area Code: ${areaNO}`);
    console.log(`Central Office Code: ${officeCode}`);
    console.log(`Line Number: ${lineNO}`);
});


//Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

const text6 = " contact us at Random@example.com or Another@domain.org for more help and info.";
const regex6 = /(\w+@\w+\.\w+)/g;
const matches6 = [...text6.matchAll(regex6)];


matches6.forEach(match => {
    const [siteURL] = match;

    const [username, domain] = siteURL.split('@');
    console.log(`Full match: ${siteURL}`);
    console.log(`Username: ${username}`);
    console.log(`Domain: ${domain}`);
});







