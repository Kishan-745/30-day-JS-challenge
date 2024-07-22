// Day-7

// Activity 1: Objects and Access

// task 1
let book = {
    title:"javascript",
    author:"Hitesh",
    year: 2020
}
console.log(book); 

// task 2
console.log(book.title);
console.log(book.author);

// Activity 2: Object Methods

// task 3
function printTitle (){
    console.log(`the book title is ${book.title} and auther is ${book.author}`);
};
book.printTitle=printTitle;
book.printTitle();
// console.log(book.printTitle());

// task 4
function updateYear (new_year){
    book.year = new_year  
}
updateYear(2023);
console.log(book);

// Activity 3: Nested object

// task 5
let library ={
    name: "chai aur code library",
    book :[{
        title:"javascript",
        author:"Hitesh",
        year: 2020
    },
    {
        title: "Fire Weather: A True Story From a Hotter World",
        author: "John Vaillant",
        year: 2023,
      }
]
}
console.log(library);

// task 6
console.log(`name of library ${library.name}`);

library.book.forEach(element => {
    console.log(element.title)
});

// Activity 4: the 'this' keyword

// task 7
book.user = function(){
    console.log(`book's title is ${this.title} and published year is ${this.year}`);
}
book.user();

// Activity 8: Object Iteration
// task 8

for (const key in book) {
    console.log(key, book[key]);
    }

// task 9
console.log(Object.keys(book),Object.values(book));