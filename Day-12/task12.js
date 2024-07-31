// Activity 1
// task 1
function throwNewError() {
    throw new Error("This is an error")
}

try {
    throwNewError()
} catch (error) {
    console.error('An error occurred ', error.message)
}

// task 2
function division(a,b){
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a/b;
}
try {
    let result = division(20,0);
    console.log(result);
} catch (error) {
    console.log(error.message);
}

// task 3
try {
    console.log("program excution in Try block");
} catch (error) {
    console.log("Errors can handle in catch block");
}
finally{
    console.log("This is finally block");
}

// Acitivty 3: custom error objects
// task 4
class CustomError extends Error{
    constructor(message){
        super(message);

        this.name='CustomError'
    }
}
function throwCustomError(){
    throw new CustomError('This is a custom error')
}
try {
    throwCustomError();
    console.log("success");
} catch (error) {
    if(error instanceof CustomError){
        console.log('caught the custom error:',error.message);
    }else{
        console.log('an error occurred:',error.message);
    }
}

// task 5
class customError extends Error{
    constructor(message){
        super(message);
        this.name='validation error'
    }
}
function validatesInput(input){
    if(input.trim()==0){
        throw new customError("input cannot be empty");
    }
    return "valid string"
}
try {
    const result= validatesInput("");
    // console.log(result);
} catch (error) {
    if(error instanceof customError){
        console.log('validation error:',error.message);
    }else{
        console.log('an error:',error.message);
    }
    
}

// Activity 4: error handling in promises
//task 6
const promise = new Promise(function(resolve,reject){
    setTimeout(() => {
        let random = Math.random() > 0.5;
        if(random){
            reject('Something went wrong')
        }else{
            resolve("success")
        }
    });
})
promise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

// task 7
const promise1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        let random = Math.random() > 0.5;
        if(random){
            reject('error : its not greater than 0.5')
        }else{
            resolve("success : its greater than 0.5")
        }
    });
})
async function HandleErrors(){
    try {
        const response= await promise1
        console.log(response);   
    } catch (error) {
        console.log("random",error.message);
    }
}
HandleErrors();

// Activity 5: Graceful error handling in fetch
// task 8
fetch('https://www.quora.com/How-can-I-generate-a-list')
.then((response)=>{
    if(!response.ok){
        throw new Error('Https error')
    }
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log('fetch error:',error.message);
})

// task 9
async function fetchData(){
    try {
        const resp=await fetch('https://www.quora.com/How-can-I-generate-a-list')
        
        if(!resp.ok){
            throw new Error('invalid URL')
        }
        const data=await resp.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchData();
