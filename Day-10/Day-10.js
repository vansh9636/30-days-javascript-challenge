// Day 10: Event Handling 

// Task 1: Add a click event listener to a button that changes the text content of a peragraph.

let peraBtn = document.querySelector('#textP');
let changetext = document.querySelector('#changepera p');
peraBtn.addEventListener("click", function () {
    changetext.textContent = 'This is new text pera. its change on click of button';
})

// Task 2:Add double-click event listener to an image that toggles its visibility.

let mountainImg = document.getElementById('mountain');
mountainImg.addEventListener("dblclick", () => {
    mountainImg.style.opacity = ".5";
})

// Task 3:Add mouseover event listener to an element that changes its background color.

let mouseover = document.getElementById('changebg');
mouseover.addEventListener('mouseover', () => {
    mouseover.style.backgroundColor = "lightseagreen";
})

// Task 4: Add mouseout event listener to an element that resets its background color.

mouseover.addEventListener('mouseout', () => {
    mouseover.style.backgroundColor = "lightblue";
})
// Task 5: add a keydown event listener to an input field that logs the key pressed to the cosnsole.

let pressKy = document.getElementById('downkey');
pressKy.addEventListener("keydown", (e) => {

    console.log("key pressed", e.key);

})

// Task 6: Add a keyup event listener to an input field that displaus the surent value in a paragraph

let value = document.querySelector("#valueOfinput");
pressKy.addEventListener("keyup", () => {
    value.innerHTML = pressKy.value;
})

// Task 7: Add a submit event listener t oa form that prevents the default submission and logs the form data to the console.

let form = document.querySelector('#form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(form.children[0].value);
    console.log(form.children[1].value);
})

// Task 8: Add a change event listener to a selet dropdown that displays the selected value in a paragraph.
let selected = document.querySelector("#selected");
let pera = document.querySelector("#p3")
selected.addEventListener("change", () => {
    pera.innerHTML = selected.value;
})

// Task 9: Add a click listener to a list that logs the text content of the clicked list item using event delegation.

let getvalOnclick = document.querySelector("#clickval");
getvalOnclick.addEventListener("click", (e) => {
    console.log(e.target.innerText);
})

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements .

let parent = document.querySelector("#parentDiv");
let addbtn = document.querySelector("#addtext");
let item = document.createElement('span');
item.innerHTML = "js challenge";
addbtn.addEventListener("click", () => {
    parent.appendChild(item);
})
