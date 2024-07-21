// Day-6: Arrays

//Activity 1:Array creation and access
const arr =[1,2,3,4,5];
console.log(arr);

console.log(`first element of array is ${arr[0]} and the last element of array is ${arr[arr.length-1]}`);

// Activity 2: Array Methods

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift(arr[0]);
console.log(arr);

arr.unshift(100);
console.log(arr);

// Activity 3:

const arr_num = [1,2,3,4,5]

let new_arr = arr_num.map((n)=> n*2)
console.log(new_arr);

const even = arr_num.filter((n)=> n%2==0 );
console.log(even);

let sum = arr_num.reduce((acc,curr)=>{
    return acc+curr;
},0)
console.log(sum);

// Activity 4: array iteration

let arr1= [1,2,3,4,5,6,7,80,90]
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

arr1.forEach(function (element) {
    console.log(element);
})

// Activity 5: multi-dimentional array
const arr_2d = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr_2d);

console.log(arr_2d[0][2]);