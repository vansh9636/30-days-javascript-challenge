// Day 17: Data Structures 

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next .

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

const firstNode = new Node(2);
const secNode = new Node(3);

firstNode.next = secNode;
console.log(`Node One : ${firstNode}`);

// Task 2: inplement a liknkedlist class with methods to add a node to the end, remove a node from the end , and display all nodes. 

class LinkedList {

    constructor( ){
        this.head = null;
        this.tail = null;
    }

    addNode( value ){
        const newNode = new Node( value );
        if( !this.head ){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    removeNode(){
        let currentNode = this.head;
        while( currentNode.next !== this.tail ){
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
    }

    displayNodes(){
        let currentNode = this.head;
        while( currentNode ){
            console.log( currentNode.value );
            currentNode = currentNode.next;
        }
    }
}


const linkedList = new LinkedList();
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.removeNode();
linkedList.displayNodes();

// Task 3: Implement a stack class with methads push (add element), pop (remove element), and peek (view the top element).

class Stack {

    constructor() {
        this.stack = [];
    }

    // push method 
    push( value ) {
        this.stack[ this.stack.length ] = value  
    }

    // pop method
    pop() {
        this.stack.length = this.stack.length - 1;  
    }

    // peek method
    peek() {
        console.log( this.stack[ this.stack.length - 1 ] )
    }

}


const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.peek()
stack.pop()
stack.peek()

// Task 4: Use the stack class to reverse a string by pushing all characters onto the stack and then popping them off.

class Stack2 {

    constructor() {
        this.stack = []
        this.reverse = ""
    }

    getStr( value ) {
        for (let index of value) {
            this.stack.push( index )
        }
    }

    reverseStr() {
        let length = this.stack.length

        while ( length > 0 ) {
            this.reverse += this.stack.pop()
            length--
        }
        console.log( this.reverse )
    }
}


const reverse = new Stack2()

reverse.getStr("aayush")
reverse.reverseStr()

// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class Queue{
    constructor(){
        this.queue = []
    }

    enqueue( value ){
        this.queue[ this.queue.length ] = value           
    }

    dequeue(){
        for ( let index = 1 ; index < this.queue.length ; index++ ){    
            this.queue[ index-1 ] = this.queue[ index ]               
        }                                                                   
        this.queue.length = this.queue.length - 1   
    }

    front(){
        console.log( this.queue[0] )
    }

}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.front()
console.log( queue )
queue.dequeue()
queue.front()
console.log( queue )


// Task 6: Use the Queue class to sirnulate a simple printer queue where print jobs are added to the queue and prccessed in order.

class PrinterQueue{

    constructor(){
        this.queue = []
    }    

    addJob( value ){
        this.queue.push( value )
    }

    processjob(){

        let length = this.queue.length 
        while( length > 0 ){
            console.log( this.queue.shift() )
            length --
        }
    }
}


const printer = new PrinterQueue()

printer.addJob("Queue Job One")
printer.addJob("Queue Job Two")
printer.addJob("Queue Job Three")
printer.addJob("Queue Job Four")
printer.addJob("Queue Job Five")
printer.processjob()




