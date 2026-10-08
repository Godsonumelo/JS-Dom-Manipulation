// TODO: THE DOCUMENT IS A CHILD OBJECT OF WINDOW
// the are the same
//console.log(window .document)
// console .log(document)

//* We can completely skip "window" whenever we are trying to
//* reference an object that is a child of "window" e.g "document",
//* location, history, cache, cookieStore, browser, crashReport, console,

// ? There is an Object for everything in the Browser

// difference between element an node
// everything in a document is a node but all are not element

// TODO: DEEP DIVE INTO ELEMENT/NODE SELECTION

//  getElementbyId() -returns a single node (an Element)
// const title = document.getElementById('main-heading')
// console.log(title)

// title.style.color = "red";

// const getSomething = function(){
//     return 'something'
// }

// console.log(getSomething)

// const holdSomething = getSomething
// console.log(holdSomething());

// ! What happens if we have more than one (1) Element with the id?

// * getElementsByClassName() -return an HTMLCollection (sync Update)

// const unOrdered = document.getElementsByClassName('list-items')
// console.log(unOrdered)

// const header = document.querySelector('header, #p-2');
// console.log(header);
// const header = document.querySelectorAll('#test-id1, #test-id2');
// console.log(header);

// console.log(header[1]);

// const head = document.querySelectorAll('.list-items');
// console.log(head);


// const Ego = document.querySelectorAll('input[name="payment"]')
// console.log(Ego)
// if(money[0].checked){
    //     console.log('first radio button must be clicked');
    
    // }
    
    
// const money = document.getElementsByName('payment');

// for (let i = 0; i < money.length; i++) {
//     money[i].addEventListener("change", () =>{
//         if (money) {
//             console.log(money[i].value);
            
//         }
//     })
    
// }

// const tableitem = document.querySelectorAll("table tr");
// console.log(tableitem);

// for(let x = 2; x < 20; x = x + 3){
//     tableitem[x].style.backgroundColor = 'red'
// }

// const boxes = document.querySelector('.boxes')
// const Boxes = boxes.querySelectorAll(':scope > div')
// console.log(Boxes);

// * 1. Live Collection & Dom Update (No need to reQuery).
// This is possible because we are only selecting only HTMLElements,
// no textNodes, comments or Empty spaces, hence it is easy for us to
// attach HTMLElements to the DOM without breaking the DOM Tree

// const boxesParent = document.getElementsByClassName('boxes')
// console.log(boxesParent);

// console.log(boxesParent[0].children);

// boxesParent[0].innerHTML += '<div class="box">Box 4</div>'
// boxesParent[0].innerHTML += '<div class="box">I am exprimenting with js</div>'
// boxesParent[0].innerHTML += '<div class="box">I am learning how to attach Element to the DOM</div>'
// boxesParent[0].innerHTML += '<div class="box">I have successful attached 4 Element to the DOM</div>'
// console.log(boxesParent[0].children);

// const addToDOM = function(name){
//     boxesParent[0].innerHTML += '<div class="box">' + name  + '</div>'
// }

// addToDOM('Richard')
// const boxsz = document.querySelector('.boxes')
// const Boxsz = boxsz.querySelectorAll(':scope > div')
// console.log(Boxsz);

// boxsz.innerHtml += '<div class="box">Box 4 </div>'
// console.log(boxsz);


// DOM lives in the Browser of your user's computer, while your source code lives inside your 
// computer  

// * Styling with the "style" Property

//Every Element has a style Property which we can access


// const container = document.querySelector('.container')

// container.setAttribute("style","color:skyblue; width: 17rem; box-shadow:2px 2px 2px 2px font-size:2rem;font-weight: 700; border: 2px solid black")

// const input = document.querySelector('#style-input')

// input.addEventListener('keydown',function(keyEvent){
//     if(keyEvent.key === 'Enter'){
//     const inlineStyle = input.value;
//     runStyling(inlineStyle)
// }
// })

// const runStyling = (styling) => {
//     document.querySelector('.container').setAttribute("style", styling)
// }


// ? To be creative with inline style


//

// const username = document.querySelector('input[type="text"]')
// const password = document.querySelector('input[type="password"]')
// const submit = document.querySelector('input[type="submit"]')
// const feedback = document.querySelector('.feedback')
// const submitBtn = document.querySelector('.disable-btn')

// username.addEventListener("click",function(){
//     console.log('Click happened username');
//     username.classList.add('active');
//     password.classList.add('active');
    
// });

// password.addEventListener("click", function(){
//     if(username.value === ''){
//         username.classList.add('error')
//         password.classList.add('error')
//     } else{
//         password.classList.remove('error')
//         password.classList.add('excellent')
//     }

//     if(password.classList.contains('error')){
//         feedback.textContent = 'You have not typed your name, pls, input.'
//         submitBtn.disabled = true;
//     } else if(password.classList.contains('excellent')){
//         feedback.textContent = 'You can proceed'
//     }
// })

//How to select elements
//getElementById
//getElementByTagName
//getElementByClassName
//querySelector
//querySelectorAll

//getElementById
// let text = document.getElementById("africa");
// console.log(text);

// //getElementByTagName
// let text2 = document.getElementsByTagName("li");
// console.log(text2);

// //getElementByClassName
// const text3 = document.getElementsByClassName("list-item");
// console.log(text3);

// let ul = document.querySelector("ul");
// let li = document.createAttribute("li");

// let item = document.querySelector("ul");
// let myList = document.createElement("li");
// item.append(myList);
// myList.textContent = 'Togo'
// console.log(myList);

// let button = document.getElementById("btn")
// button.addEventListener("click", function () {
//     button.style.color = "green"

// })

// let mybtn = document.getElementById("mybtn")
// let count = document.getElementById("count")
// let clicks = 0

// mybtn.addEventListener("click", function (){
//     clicks++;
//     count.textContent = clicks + "Ckay";

// })

// function ViewTimeline() {
//     document.querySelector("demo").innerHTML = new Date().toLocaleTimeString();
// }


// //Object.js

// const obj2 = {
//     name: 'Richard'
// }

// obj2 = null;
// null removes the variable which is a reference to the object or arry and the gabage catch it

// let Richman = {
//     name: 'Richard',
//     age: 20,
//     school: 'University of Ghana',
//     isActive: false
// }

// const list =document.getElementById('list');
// list.innerHTML = `
// <li>${Richman.name}</li>
// <li>${Richman.age}</li>
// <li>${Richman.school}</li>
// <li>${Richman.isActive ? `${Richman.name} is Active` : `${Richman.name} is Not Active`}</li>
// `

//tenary operator is a short hand for if else statement or used to get feedback from a user that we dont know if it is true or false

//New day: Array and array method

// const arr = [];
// //adding to an array
// arr.push({name: 'Richard'},{age: 20},{school: 'University of Ghana'},{isActive: false})
// arr.push({money: 2000000})
// console.log(arr)

// console.log(arr.splice(0, 1))




//removing an array

// const arr = [];

//for each()

// const doctors = ["john", "Sarah", "Michael"];

// doctors.forEach((doctor) => {
//     console.log(doctor);
    
// })

//filter()used to get only the element that satisfy a condition
// const ages = [12, 18, 25, 14, 30];
// const adults = ages.filter((age) => age >= 18);  
// console.log(adults);

// const doctor = [
//     { id: 1, name: "Sarah"},
//     { id: 2, name: "John"},
//     { id: 3, name: "Michael"},
// ];

//find()USed to find the first element that satisfy a condition
// const doctorss = doctor.find((doctor) => doctor.id === 2);
// console.log(doctorss);

//findIndex() used to find the index of the first element that satisfy a condition
//  const doctores = ["Sarah", "John", "Micheal"];

// const index = doctores.findIndex((doctor) => doctor === "John");
// console.log(index);

// console.log(doctores.includes("Sarah"));

//includes()checks whether an array contains a particular value

// const specialties = [
//     "Cardiology",
//     "Dentistry",
//     "Neurology"
// ];

// console.log(specialties.includes("Dentistry"));

//some()Checks whether at least one element satisfies a condition

// const ages = [12, 15, 21, 14];

// const hasAdult = ages.some((age) => age >= 18);

// console.log(hasAdult);

//every()Checks whether all elements satisfy a condition

// const ages = [20, 25, 30];

// const allAdults = ages.every((age) => age >= 18);

// console.log(allAdults);

// //sort() Used to sort an array
// const numbers = [10, 5, 15, 2, 100, 86, 12, 0];

// numbers.sort((a, b) => a - b);

// console.log(numbers);

//call back function

function calc (value1, value2, func){
   return func(value1, value2);
}

function add(a , b){
    let sum = a + b;
    return sum;
}

function sub(a, b){
    let product = a -b;
    return product;
}

function mult(a, b){
    let value = a * b;
    return value;
}

console.log(calc(3,4, add));
console.log(calc(4,5, sub));
console.log(calc(5,8, mult))