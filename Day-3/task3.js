// Day 3 : Control Structure

let a = 5;
if(a > 0){
    console.log("positive")
}else if(a ===0){
    console.log("zero");
}else{
    console.log("negative");
}

const age =18;
if(age >= 18){
    console.log("eligible for vote");
}else{
    console.log("not eligible for vote");
}

let b=7;
let c=4;

if(a>b){
    if(a>c){
        console.log("a is greater");
    }else{
        console.log("c is greater");
    }
}else{
    if(b>c){
        console.log("b is greater");
    }else{
        console.log("c is greater");
    }
}

// Activity 3: switch case

// console.log(new Date().getDay());
let day =2;
switch( day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;   
        
    case 3:
        console.log("Wednesday");
        break;   

    case 4:
        console.log("Thursday");
        break;  
       
    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;
    
    default:
        console.log("Invalid day.");
         break;    
}

let marks=90;
switch(true){
    case marks>=90:
        console.log("A+");
        break;

    case (marks>=80):
        console.log("A");
        break;

    case (marks>=70):
        console.log("B");
        break;
        
    case (marks>=60):
        console.log("C");
        break;
        
     case (marks>=40):
        console.log("D");
        break; 
        
     case (marks < 40):
        console.log("F");
        break;

     default :
     console.log("Invalid marks");
}
//Activity 4: ternary operator

let number = -6;
let result = (number%2==0)? "even number" : "odd number"
console.log(result);

let year =2024;
if(year%4==0 && year%100==0 && year%400){
    console.log("leap year");
}else if(year % 4 ==0){
    console.log("leap year");
}else{
    console.log("not leap year");
}