//named functions
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5

//anonymous functions

const subtract = function(a,b){
    return a-b
}

console.log(subtract(5,2))

//Arrow functions

const multiply = (a,b) => a*b
console.log(multiply(5,3))

//constructor function

function person(name,age){
    this.name=name
    this.age=age
}
const person1 = new person("Alice",25)
console.log(person1.name)

//generator function

function* countUp() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const counter = countUp();
console.log(counter.next().value); 
console.log(counter.next().value); 

//Immediately Invoked Function Expressions (IIFE)
(function() {
    console.log("IIFE executed!");
})(); 

