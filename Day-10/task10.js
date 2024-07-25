// Day-10 : Event Handling

// Activity 1: Basics Event Handling
// task 1
const para=document.getElementById("para")
const button = document.getElementById("button")
button.addEventListener("click", function(){
    para.innerHTML="hey this paragraph is changed by using click event listner "
})

// task 2
const button2= document.getElementById("imgChange")

button2.addEventListener("dblclick", function(){
    let images= document.getElementById("myImage")
    if(images.style.display === "none"){
        images.style.display = "block"
    }else{
        images.style.display = "none";
    }
})

// Activity 2: Mouse Events
// task 3
const button3=document.getElementById("button3")
const para2= document.getElementById("para2")
button3.addEventListener("mouseover", function(){
    para2.style.backgroundColor="red"
})

// task 4
const heading=document.getElementById("heading")
const button4=document.getElementById("button4")
button4.addEventListener("mouseout", function(){
    if( heading.style.backgroundColor==="green"){
    heading.style.backgroundColor="blue"}
    else{
        heading.style.backgroundColor="green"
    }
})

// Activity 3: Keyboard Events
// task 5
const input =document.getElementById("txt")
input.addEventListener("keydown",function(e){
    console.log(e.key);
})

// task 6
const input2=document.getElementById("txt2")
let para3=document.getElementById("para3")

input2.addEventListener("keyup",function(){
    para3.textContent=input2.value
})

// Activity 4: form Event
//task 7
const form =document.getElementById("form")

form.addEventListener("submit",function(e){
    e.preventDefault()
    let name = document.getElementById("name").value
    let email =document.getElementById("email").value
    console.log(name);
    console.log(email);
})

// task 8
const select=document.getElementById("cars")
const para4=document.getElementById("para4")
select.addEventListener("change", function(e){
    // para4.textContent=select.value
    const selected= e.target.value
    para4.textContent=`Selected value: ${selected}`
})

// task 9
const list = document.getElementById("list")
list.addEventListener("click", function(e){
    console.log(e.target.textContent);
})

// task 10
const parent=document.getElementById("parent")
const button5= document.getElementById("event")
button5.addEventListener("click",function(e){
    const h4=document.createElement("h4")
    h4.textContent="New Child"
    parent.appendChild(h4);
}
)