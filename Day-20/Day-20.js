// Day 20 : LocalStorage and sessionStorage.

// Task 1: write a script to save a strig calue to localstorage and retrieve it. log the retrieved value;

let key1 = "Name";
let value1 = "Vansh Kumawat";
localStorage.setItem(key1, value1)

console.log(localStorage.getItem("Name"));

// Task 2:write a script to save an object to localStorage by converting it to a JSON string Retrieve and parse the object ,then log it 

const Object = {
    name: "Vansh kumawat",
    age: 19,
    state: "Rajasthan"
};

localStorage.setItem("MyDetails", JSON.stringify(Object));

console.log(localStorage.getItem("MyDetails"));

// Task 3:create a simple form that seves user input to localStorage when submitted.Retrieve and display the seved dataon page load.

let btn = document.getElementById("submit");

function savedata() {
    let nameinput = document.getElementById("name").value;
    let mailInput = document.getElementById("email").value;
    let ValName = nameinput;
    let ValMail = mailInput;
    localStorage.setItem("Name", ValName);
    localStorage.setItem("Gmail", ValMail);
};
function displayData() {
    let formdata = document.getElementById("formdata");
    formdata.innerHTML = `<span> User Name : ${localStorage.getItem("Name")}</span><br><span> User Gmail : ${localStorage.getItem("Gmail")}</span>`;
}

btn.addEventListener("click", savedata);
window.addEventListener("load", displayData);

// Task 4: write a script to remove an item form localstorage .log the localstorage content before and afte removal;

let before = () => {
    localStorage.setItem("item1", 23);
    localStorage.setItem("item2", 46);
    console.log("before removal", localStorage.getItem("item1"), localStorage.getItem("item2"));
}

before();

let after = () => {
    localStorage.removeItem("item2");
    console.log("after removal", localStorage.getItem("item1"), localStorage.getItem("item2"));
}
after();

//  Task 5: write a script to save an string value to sessionStorage and retrieve it .log the retrieved value.

let key2 = "Name";
let value2 = "Vansh Kumawat";
sessionStorage.setItem(key2, value2);
console.log(sessionStorage.getItem("Name"));

//  Task 6:write a script to save an object to session storage by cnverting it to a json string .retrieve  and parse the object ,the log it ;

const Object2 = {
    name: "Vansh kumawat",
    age: 19,
    state: "Rajasthan"
};

sessionStorage.setItem("MyDetails", JSON.stringify(Object2));

console.log(sessionStorage.getItem("MyDetails"));


// Task 8: write a script to remove an item form sessioonstorage .log the sessionstorage content before and afte removal;
 
let before2 = () => {
     sessionStorage.setItem("item3", 12);
     sessionStorage.setItem("item4", 24);
     console.log("before removal", sessionStorage.getItem("item3"), sessionStorage.getItem("item4"));
 }
 before2();
 let after2 = () => {
     sessionStorage.removeItem("item4");
     console.log("after removal", sessionStorage.getItem("item3"), sessionStorage.getItem("item4"));
 }
 after2();

//Task 9: Write a function to accept a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.

function savedata(key, value) {
    localStorage.setItem(key, value);

    sessionStorage.setItem(key, value);

    const localstore = localStorage.getItem(key);
    console.log(`localStorage - ${key} : ${localstore}`);

    const sessionstore = sessionStorage.getItem(key);
    console.log(`sessionStorage - ${key} : ${sessionstore}`);

}

savedata('CompareKey', 'Comparevalue');

//Task 10: Write a function that clears all data from localStorage and sessionStorage. Verify that both storages are empty

function clearData() {
    localStorage.clear();
    sessionStorage.clear();
    if (localStorage.length === 0) {
        console.log("localstorage : clear")
    }
    else{
        console.log("localstorage : Not clear")

    }
    if (sessionStorage.length === 0) {
        console.log("sessionStorage : clear")
    }
    else{
        console.log("sessionStorage : Not clear")

    }
}
clearData();