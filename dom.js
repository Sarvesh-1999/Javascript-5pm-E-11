//! DOM SELECTORS - 5 TYPES
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()

// let box1 = document.getElementById("box1")
// console.log(box1);

// let sections = document.getElementsByClassName("container")
// console.log(sections);

// let articles = document.getElementsByTagName("article")
// console.log(articles);

// let ele1 = document.querySelector("#box1") // using id
// console.log(ele1);

// let ele2 = document.querySelector(".container") // using class
// console.log(ele2);

// let ele3 = document.querySelector("article")// using tagName
// console.log(ele3);

// // document.querySelectorAll() -->  example
// let elements1 = document.querySelectorAll("#box1")
// console.log(elements1);

// let elements2 = document.querySelectorAll(".container")
// console.log(elements2);

// let elements3 = document.querySelectorAll("article")
// console.log(elements3);

// //! DOM MANIPULATION
// //! how to create HTML Elements -->
// // document.createElement()
// let h1Tag = document.createElement("h1")
// let h2Tag = document.createElement("h2")

// //! how to add text content -->
// // 1) innerText
// // 2) innerHTML
// h1Tag.innerText = "Hello <strong>Javascript</strong>"
// h2Tag.innerHTML = "Hello <em>React</em>"

// console.log(h1Tag);
// console.log(h2Tag);

// //! appendChild() method is used to add a child node to another element, it accepts single arguement.
// // document.body.appendChild(h1Tag , h2Tag) // BAD PRACTICE

// //! append()
// document.body.append(h1Tag,h2Tag)

//! DIFFERENCE BTW HTMLCollection[] and NodeList[]
// let collection = document.getElementsByTagName("main")
// let lists = document.querySelectorAll("main")

// console.log("collection ",collection.length); // 3
// console.log("lists ",lists.length); // 3

// let data = ["HTML" , "CSS" , "JS" , "REACT"]

// data.forEach((ele)=>{
// const mainTag = document.createElement("main")
// mainTag.innerText = ele
// document.body.append(mainTag)
// })

// console.log("collection ",collection.length); // 7 (Live Collection)
// console.log("lists ",lists.length); // 3 (Static Collection)

// //! HOW TO ADD ATTRIBUTES USING JAVASCRIPT
// const sectionTag = document.createElement("section")
// sectionTag.innerText = "I am Section"

// //! to add attribute -->
// // 1) using property
// sectionTag.id = "card"

// // 2) using method --> setAttribute("attributeName" , "attributeValue")
// sectionTag.setAttribute("class" , "box")

// console.log(sectionTag);

// //! creating table
// const tableData = [
//     {no : 1 , FullName : "Bill Gates" ,Position : "Founder Microsoft", Salary : "$1000"}
// ]

// const table = document.createElement("table")

// let tr1 = document.createElement("tr")

// let th1 = document.createElement("th")
// let th2 = document.createElement("th")
// let th3 = document.createElement("th")
// let th4 = document.createElement("th")

// th1.innerText = "No."
// th2.innerText = "Full Name"
// th3.innerText = "Position"
// th4.innerText = "Salary"

// tr1.append(th1, th2, th3, th4)

// table.append(tr1)
// document.body.append(table)

//! Events : actions performed by the user
// onclick
function singleClick() {
  console.log("single click");
}

// ondblclick
function doubleClick() {
  console.log("double click");
}

// onmouseenter
function enter() {
  console.log("mouse entered");
}

// onmouseleave
function out() {
  console.log("mouse left");
}

// onmousemove
function move() {
  console.log("mouse moved");
}

// onkeydown
function down() {
  console.log("Key is pressed");
}

// onkeyup
function up() {
  console.log("Key is released");
}

// onload
function pageLoad() {
  console.log("Page is loaded");
}

// onsubmit <--- form tag event
function formhandle(e) {
  e.preventDefault(); // stops page refresh
  console.log("Form Submitted");

  let userData = {
    email: e.target[0].value, // document.querySelector("#email").value
    password: e.target[1].value, // document.querySelector("#password").value
  };

  console.log(userData);

  // clear inputs
  e.target[0].value = "";
  e.target[1].value = "";
}

// onscroll
function paraScroll(){
  console.log("Para scrolled");
}

// onchange
function inputChange() {
  console.log("Input changed");
}


// ! addEventListener Example
const mainContainer = document.querySelector("#container")
const btn2 = document.querySelector("#btn2")

const btn1 = document.createElement("button")

btn1.innerText = "click me"

// SYNTAX ===>  element.addEventListener("event", callbackFn, useCapture)

btn1.addEventListener("click" , () => {
  console.log("Btn1 clicked");
})
btn2.addEventListener("dblclick",()=>{
  console.log("Btn2 clicked");
})
mainContainer.append(btn1)


// ! RAINBOW TASK 
const divs = document.querySelectorAll("div")

divs.forEach((ele)=>{
  ele.addEventListener("mouseenter",()=>{
    ele.style.backgroundColor = ele.innerText
  })

  ele.addEventListener("mouseleave",()=>{
    ele.style.backgroundColor="white"
  })
})

