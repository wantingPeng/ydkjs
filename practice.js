var me ={
  first: "Kyle",
    last: "Simpson",
    age: 39,
    specialties: [ "JS", "Table Tennis" ]
};
console.log(`My name is ${me.first}`)


let age 
let adult=true;
if (adult){
  var myName="kyle";
  age = 39;
  console.log(
    "Shhh, this is a secret!");
}
console.log(myName);

console.log(age);
// let Variables declared with let are block-scoped, 
// meaning they are only accessible within the block 
// they are declared (between the {} braces).
const actors=['1','2'];
actors[2]='3';
//console.log(`${actors=[]}`)
// practice.js:27 Uncaught TypeError: Assignment to constant variable.
//     at practice.js:27:22

function hello(name){
  console.log(`hello,${name}`)
}
hello("cici");



//Anonymous functions are often used as arguments to other functions or as immediately invoked function expressions (IIFEs).
// They can also be assigned to variables or object properties.

//1. As a Function Expression
const greet=function(){
  console.log('yeah')}
  greet();

  //2. As an Argument to Another Function
setInterval(function(){console.log("after 1 second")},1000);

//5. As Methods in Objects
const obj={
  greet: function() {
    console.log("Hello from the object!");
  },
  myName: cici
};
obj.greet();// Outputs: Hello from the object!

var whatToSay={
  greeting(){
    console.log("Hello!");
  },
  question(){

  },
  answer(){}
};
whatToSay.greeting();


//Arrow Functions 
//const functionName= (parameters) =>{ function body}
const add =(a,b)=>a+b;
console.log(add(2,3));

//=== uses identity equality for object values.
 // false [ 1, 2, 3 ] === [ 1, 2, 3 ];   
 var x = [ 1, 2, 3 ];
 var y = x;
 y === x;              // true

 //he == differs from === in that it allows coercion before the comparison.
 42=='42';
 1==true;
 42==='42'//false





// person.js (Module)
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// main.js
import { Person } from './person.js';

const person1 = new Person('Bob', 25);
person1.greet(); // Output: Hello, my name is Bob and I am 25 years old.



// This includes strings, arrays, maps, sets, and others
const array=['a','b','c'];
for (const element of array){
  console.log(element);
}
// Output:
// a
// b
// c
const string='hello';
for (const char of string){
  console.log(char);
}// Output:
// h
// e
// l
// l
// o


const map1=new Map();
//Adding Elements
map1.set ('key1','value');
map1.set('key2','value2');
//Accessing Elements
console.log(map1.get('key1'));
map1.delate('key2');
//Iterating Over a Map
for (const [key,value] of map1)
  {
    console.log (`${key}:${value}`)
  }
const set=new Set();
//Adding Elements
set.add(1);
set.add(2);
set.add(3);
for (const value of set){
  console.log(value);
}
//Map: Useful when you need to associate values with keys and need to efficiently look up, add, and remove pairs.
//Set: Useful when you need to store unique values and check for their existence.

//closure: remember the outer of function scope even after creation time

//heigh order function
//a function that take another function as parameters