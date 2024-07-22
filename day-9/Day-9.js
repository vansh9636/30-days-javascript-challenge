// Day 9 :DOM Manipulation 

// Task 1: selection an html element by its id and change its text content.

let h1 = document.getElementById('myName')
h1.textContent = "vansh kumawat";

// Task 2: select an html element by its class and change its background color.

let bgcolor = document.getElementsByClassName('bgcol');

for (let i = 0; i < bgcolor.length; i++) {
    bgcolor[i].style.backgroundColor = "lightseagreen";

}

// Task 3:create a new div element with some text content and append it to body.

let newDiv = document.createElement('div');
newDiv.innerText = 'Task 3: hey it is a new div';
document.body.appendChild(newDiv);

// Task 4: create a new li element and add it to an existing ul list.

let newLi = document.createElement('li');
newLi.innerText = " Task 4: this is a li";
document.getElementById("thisul").appendChild(newLi);

// Task 5: select an html element and remove it from the DOM.

newDiv.remove();

// Task 6: remove the last child of a specific html element.

let lastelem = document.querySelector("#removelast li:last-child");
lastelem.remove();

// Task 7: select an html element and change one of its attributes (e.g src of and img tag);

let elemAttr = document.getElementById("oldAttr");
elemAttr.setAttribute('class', "hinna");

// Task 8: add and remove a css class to/from an html element.

let addclass = document.querySelector('#addclass');
addclass.classList.add('newclass');
addclass.classList.remove('class1');

// Task 9: Add a click event listener to a button that changes the text content of peragraph.

let oldPera = document.querySelector('#oldpera');
let btn = document.querySelector("#click");

btn.addEventListener("click", () => {
    oldPera.textContent = ' this is new peragraph. this a best else old peragraph';
})

    // Task 10: add a mouseover event listener to an element that changes its border color.

    btn.addEventListener("mouseover", () => {
        btn.style.border = '1px solid red';
    })



