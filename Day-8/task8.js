// Day-8 : ES6+ Features

// Activity 1: Template literals  (` `)

// task 1
let name ="kishan"
let age =21;
console.log(`my name is ${name} and my age is ${age}`);

//task 2
console.log(`
    hey buddy,
    im kishan kashyap
    from kanpur
    whats about you`);

// Activity 2: Destructuring
// task 3
const arr = [12,23,75,87,89]
let [first,second]= arr
console.log(first);
console.log(second);    

// task 4
let book ={
    title:"js",
    author:"kishan",
    price:200
}
let {title,author}=book
console.log(title,author);

// Activity 3: Spread and rest operator
// task 5
let arr1 = [1,2,3,4,5,6,7,8]
const newArr = [...arr, ...arr1, 100,200]
console.log(newArr);

//task 6
function sums(...numbers){
    return numbers.reduce( function(total,num){
        return total+num;
    }, 0)
}
let result = sums(1,2,3,4,5)
console.log(result);

// Activity 4: Default Parameters
//task 7
function product(a,b=1){
    return a*b;
}
console.log(product(7,7));
console.log(product(19));

// Activity 5: Enhanched object literals
// task 8
var naam="kishan"
var roll =64
var marks = 89
let details = function (){
    return `name is ${naam} roll no ${roll}`
}
var std = {naam,roll,marks}
console.log(std);

std.details=details
console.log(std.details());

const propertyName = 'age'
const student={
    names:"kishan",
    roll:54,
    [propertyName]: 30
}
console.log(student.age);