// Day 13: Modules
// Day 1
const add= require('./mathModule')

const num1 = 5;
const num2 = 10;

const result = add(num1,num2);

console.log(`the sum of ${num1} and ${num2} is ${result}`);

// task 2
const person = require('./person')
console.log(person.fname);

// Activity 2: 
// task 3

const {add1,sub,multiply,divide} = require('./multiFunction')
const a=10;
const b=2;
console.log(`Addition: ${a} + ${b} = ${add1(a, b)}`);
console.log(`Subtraction: ${a} - ${b} = ${sub(a, b)}`);
console.log(`Multiplication: ${a} * ${b} = ${multiply(a, b)}`);
console.log(`Division: ${a} / ${b} = ${divide(a, b)}`);


// task 4
const greet = require('./exportSingle')
greet();

// Activity 3: importing entire module
 // task 5
 const {PI,E,addition,substract,multi} = require('./task5')
 let x=25;
 let y=5;
 console.log(PI,E,addition(x,y),substract(x,y),multi(x,y))


