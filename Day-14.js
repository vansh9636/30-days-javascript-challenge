// Day 14: Classes 

// Task 1: Define a class person with properties name and age, and method to return a greeting message. crreate an instance of the class and log the greeting message .

class person {
    name = "vansh";
    age = 19;

    greet() {
        return `hey ${this.name},your age is ${this.age}`;
    }
    updAge() {
        this.age = 25;
        return this.age;
    }

}
let a = new person();//this is obj:

console.log(a.greet());

// Task 2: Add a method to the person class that updates the age property and logs the updated age.

console.log(a.updAge());

// Task 3: define a class student that extends the person class.add a peroperty studentId and a method to return the student ID . create an instance of the student class and log the student id.


class student extends person {

    constructor(stdId){
        super();
        console.log(`its name and age by person class : ${this.name} , ${this.age}`);
        this.stdId = stdId;
    }
    rtnId() {
        return console.log(`student id is ${this.stdId}`);
    }

    greet(){
        return `this is override the greeted: ${this.name} , ${this.age} and studend id is ${this.stdId} `;
    }

}

let b = new student(101);
b.rtnId();

// Task 4: Override the greething method in the student class to include the student id in the message. log the override greeting message . 

let c= new student();
console.log(c.greet());//this greet is overrided  

// Task 5: Add a static method to the person class that returns a generic greeting message.Call this static method without creating an instance of the class and log the message.

// to a static not need obj to call static fun:

class person2 {
    constructor() {
        console.log('this is static fun');

    }
    static statfun(age) {
        console.log("this is age of static :", age);
    }
}

person2.statfun(5)

// Task 6: add a static property to the student class to keep track of the number of students created.increment this property in the constructor and log the total number of students.
class student2 {
    static numberOfStu = 0;

    constructor(name, id) {
        console.log(`NAME: ${name} | ID:${id}`);
        student2.numberOfStu++;

    }

}
let std1 = new student2("vansh", 101);
let std2 = new student2("jone", 102);
let std3 = new student2("krish", 103);
let std4 = new student2("raju", 104);

console.log("totle num of student", student2.numberOfStu);

// Task 7: add a getter method to the person class to return the full name(assume a fname and lname) .create an istance and log the full name using the fetter 

class person3 {
    constructor(Fname, Lname) {
        this.Fname = Fname;
        this.Lname = Lname;
    }

    fullname() {
        console.log(`${this.Fname} ${this.Lname}`);
    }
    setter(UpdFname, UpdLname) {
        this.Fname = UpdFname;
        this.Lname = UpdLname;

        console.log(`${this.Fname} ${this.Lname}`);
    }
}
let per3 = new person3("Vansh", "Kumawat");
per3.fullname();

// Task 8: add a setter method to the person class to update the name properties (firstname and last name) update the name using the setter and log the updated full name.

per3.setter("jone", "kumar");