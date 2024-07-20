// Day 2 : operators

// Activity 1: Arithmetic Operations

let num1 = 7;
let num2 = 64;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num2/num1);
console.log(num2 % num1);

// Activity 2: Assignment operator

num1 += 5;
console.log(num1);

num2 -= 10;
console.log(num2);

// Activity 3: Comparison Operator

console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);

let a=5;
let b=3;
let c=7;
console.log(a==b);

// Activity 4: logical Operators

console.log( (a>b) && (a<c));
console.log( (a>b) || (b>c));
console.log(a!=b);
console.log(b==9);

//ternary operator
console.log((a>0) ? "hi" : "bye" );

let x = -2;
let ans = (x<0)? "negative" : (x==0)? "Zero" : "positive"
console.log(ans);