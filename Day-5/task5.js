// Day-5 : Functions

// Acitvity 1: function declaration


let num = Math.floor(Math.random() *100 );
console.log(num);

function isEvenOdd(num){
    if(num%2==0){
        console.log("Even Number");
    }else{
        console.log("Odd Number");
    }
}
// console.log(isEvenOdd(5)); here function is calling not console any value of function
isEvenOdd(num);

function square(num){
    return num*num;
}
console.log(square(num));

// Activity 2:function expression

let a = Math.floor(Math.random() *100 );
let b = Math.floor(Math.random() *100 );

console.log(a);
console.log(b);
function MaxNum(a,b){
    if(a>b){
        console.log(`${a} is Maximum`);
    }else if(a==b){
        console.log("Both are Equial");
    }
    else{
        console.log(`${b} is Maximum`);
    }
}
MaxNum(a,b);

let str1="kishan"
let str2="kashyap"

function conCate(str1,str2){
    console.log(str1 +" "+ str2);
}

conCate(str1,str2);

// Activity 3: Arrow function

let sum = (a,b)=>{
    let add = a+b;
    console.log(add);
}
// console.log(sum(a,b));
sum(a,b);


// let string= "kishan"
// console.log(string[0]);
// console.log(string.length);
// let char = "h"
// let bool=false;
// for(let i=0;i< string.length;i++){
//     if(string[i]==char){
//         bool=true;
//     }
// }
// console.log(bool);

let checkChar = (string,char)=>{
    // for(let i=0;i< string.length;i++){
    //     if(string[i]==char){
    //         return true;
    //     }
    // }
    return string.includes(char);
}
console.log(checkChar("kishan","h"))

//Activity 4: function parameter and defaults value

let prod = (a,b=5)=>{
    return a*b;
}
console.log(prod(10,2));

let greet = (name, age=16)=>{
    console.log(`Happy birthday ${name} on your ${age}th age`);
}

greet("kishan", 22);
greet("indrajeet");

const greeting = (x="kishan")=>{
    console.log(`Hello ${x}!`);
}
const callFunc = (fn,nums)=>{
        for(let i=0;i<nums;i++){
            fn();
        }
}
callFunc(greeting,4);

const addition = (x)=>{
    return x+10;
}

const multiply =(x)=>  {
    return x*2;
}  
const manyFunc = (fn1,fn2,value) =>{return fn2(fn1(value));
}

console.log(manyFunc(addition,multiply,5));
