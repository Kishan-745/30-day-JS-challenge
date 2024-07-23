// Day-9
// Activity 1: Selection and Manipulation element

//task 1
document.getElementById('text').innerHTML="hey i am here to change your bg"

// task 2
let bgChanger = document.getElementsByClassName("backgroundChange")
bgChanger[0].style.backgroundColor="red";

// Activity 2: Creating and Appending Element

// task 3
const div1=document.createElement("div")
div1.innerHTML="hello" 
document.body.appendChild(div1)

// task4
const list = document.createElement("li")
list.innerHTML="kishan list"
document.getElementById("list").appendChild(list)

// Activity 3: Removing Element
// task 5
const paraRemoved=document.querySelector("p")
paraRemoved.remove()

// task 6
const lastElement= document.querySelector("footer")
lastElement.removeChild(lastElement.lastChild)


// Activity 4: Modifuing Attributes and Classes
// task 7
const imageChanges= document.getElementById("image")
imageChanges.src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"

// task 8
const add= document.getElementById("addCss")
add.classList.add("newClass")
add.classList.remove("newClass")

// Activity 5: Event Handling
// task 9
const button=document.getElementById("button")
const paragraph= document.getElementById("para")

button.addEventListener("click",function(){
    paragraph.innerHTML="paragraph changed"
})

// task 10
const border=document.getElementById("border")
border.addEventListener("mouseover",function(){
    border.style.border="2px solid red"
})