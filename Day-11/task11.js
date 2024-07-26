// Day-11: Promise and Async/Await

// Activity 1: understanding promises
// task 1

let promise1=new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("ok");
        resolve();
    }, 2000);
});
promise1.then(function(){
    console.log("promise1 resolved");
})
// task 2
let promise2=new Promise(function(resolve, reject){
    setTimeout(() => {
        let num= 7;
        if(num %2 == 0){
            resolve();
        }else{
            reject();
        }
    },2000)
})
promise2.then(function(){
    console.log("number is even");
}).catch(function(){
    console.log("Error: not even");
})

// Activity 2: Chaining of Promises
// task 3
let promise3=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"kishan", email:kishangmail.com});
        }else{
            reject("Error: something went wrong");
        }
    },2000)
})
promise3.then(function(user){
    console.log(user);
    return user.email;
}).then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
})

// Activity 3: using Async/ wait
// task 4 &5
const promise4=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({username:"kk", password:"123"});
        }else{
            reject("Error: obj wrong");
        }
    
    },2000)
})

async function waitPromises(){
    try{
        const resp= await promise4
    console.log(resp);
    }
catch(error){
    console.log(error);
}
}
waitPromises();

// Activity 4: Fetching data from API
// task 6

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json(); 
})
.then((data)=>{console.log(data)

})
.catch((errors)=> console.log(errors))


// task 7
async function getData(){
    try {
        const response1=await fetch('https://jsonplaceholder.typicode.com/users')
        const data1= await response1.json()
        console.log(data1);
    } catch (error) {
        console.log("E:",error);
    }
   
}
getData();

// Activity 5: concurrent Promises
// task 8
const timeOut = (time)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Completed in ${time}`);
        },time)
    })
}
Promise.all([timeOut(4000),timeOut(5000)]).then(function(result){
    console.log(result);
})

// task 9
const promis1= new Promise(function(resolve,reject){
    setTimeout(resolve,600,"one");
});

const promis2= new Promise(function(resolve,reject){
    setTimeout(resolve,300,"two");
});

Promise.race([promis1,promis2]).then((value)=>{
    console.log(value);
})