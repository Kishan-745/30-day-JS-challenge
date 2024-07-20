// Day -4 : Loops

// Activity 1: for loop

for(let num=1;num<=10;num++){
    console.log(num);
}
console.log();

for(let num1=1;num1<=10;num1++){
    console.log("5"+"*"+ num1 + "=" + 5*num1);
}

// Activity 2: while loop

let i=1;
let sum=0;
while(i<=10){
    sum+=i;
    i++;
}
console.log(sum);

i=10;
while(i>=1){
    console.log(i);
    i--;
}

// Activity 3: do while loop
let j=1;
do{
    console.log(j);
    j++;
}while(j<=5);

//task=6
let num2=5;
let fact=1;
do{
    fact*=num2;
    num2--;
}while(num2>=1);
console.log(fact);

// Activity 4: nested loops

for(let x=1;x<=5;x++){
    let str=''
    for(let y=1;y<=x;y++){
        str += '* '
    }
    console.log(str);
}

// Activity 5: loop control

for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    console.log(i);
}