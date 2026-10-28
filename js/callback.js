//  function task1 (cb){
//     console.log('Task 1 Completed')
//  cb()
// }

//  function task2 (cb){
//     console.log('Task 2 Completed')
//  cb()
// }

//  function task3 (cb){
//     console.log('Task 3 Completed')
//  cb()
// }

//  function task4 (cb){
//     console.log('Task 4 Completed')
//  cb()
// }

// function completed () {
//   console.log('All task completed')
// }

// task1( ()=> {
//     task2( ()=>{
//         task3( ()=> {
//             task4( ()=> {
//                 completed()
//             })
//         })
//     })
// })

// function task5(callback){
//     callback()
//     console.log('This is task5');

// }

// function task11(cb){
//     setTimeout( () => {
//     console.log('Task 11 Completed')
//     cb()
//     }, 3000)
// }

// function task12(cb){
//     setTimeout( () => {
//     console.log('Task 12 Completed')
//     cb()
//     }, 1000)
// }

// function task13(cb){
//     setTimeout( () => {
//     console.log('Task 13 Completed')
//     cb()
//     }, 1500)
// }

// function task14(cb){
//     setTimeout( () => {
//     console.log('Task 14 Completed')
//     cb()
//     }, 500)
// }

// task11( ()=>{
//   task12( ()=>{
//      task13( ()=>{
//        task14( ()=>{
//          console.log('All task completed');
//        })
//      })
//   })
// })

// function pause(time, cb){
//     console.log("seconds since 19/0:" + Date.now() / 1000);

//     const stopTime = Date.now() + (time * 1000)

//     while(Date.now() < stopTime){

//     }

//     cb()
// }

// pause(5, ()=>{
//     console.log("This will show up after 5 seconds");

// })

//* UNDERSTANDING HIGHER ORDER FUNCTION
//*THE USE OF CALLBACKS and ITERANLES

// const users = [
//     { id: 1, name: "MrMe", age: 24, active: false},
//     { id: 2, name: "juliet", age: 21, active: true},
//     { id: 3, name: "Richard", age: 19, active: true},
//     { id: 4, name: "Favour", age: 23, active: true},
//     { id: 5, name: "Traitor", age: 17, active: true},
// ];

//? Using for...of

// for(user of users){
//     console.log(`${user.id} ${user.name}`)
// }

// let change = [];
// for(user of users){
//     change.unshift(user)
// }
// console.log(change);

//spread operator(...) expands an iterables or object into elements.
// it "unpack" something that holds multiple values
// const arr1 = [1, 2, 3]

// function add(...plenty){
//     let sum =0;

//     for(arr of arr1){
//      sum += arr
//     }
//     return sum;
// }
// console.log(add(... arr1));

// const arr2 = [4, 5, 6,21, 45];
// console.log(Math.max(...arr2));

// function largestNum(...max) {
// let myNum = numbers[0]
// for (max of numbers) {
//     if (max > myNum) {
//         myNum = max
//     }
//       return myNum
// }
// }
// console.log();

//

// const obj = { a: 1, b: 2};
// const copy = {...obj, c:3}

// console.log(copy);

//HIGHER ORDER ARRAY METHODS
//These are strictly for Array, they do not work on all iterables

//? forEach()

// [1,3,4,5,6, 'string', null, undefined].forEach(function(my, item){
//  console.log(`${my}  ${item}`);

// })

// [1,3,4,5,6, 'string', null, undefined].forEach(item => console.log(item),
// )
// function richard (dave, name){
//   dave(name)
// }

// richard(console.log, 'my people be still')

//Modification
// function modifyArray(array, callback){
//     for(let i = 0; i < array.length; i++){
//         array[i] = callback(array[i]);
//     }
// }

// const testingArray = [1,3,4,5,6,7,8]
// modifyArray(testingArray, (number)=> {
//     return number + 100
// })

// console.log(testingArray);

//modify array for forEach
// numArray

// const names = ["Richard", "Favour", "Juliet", "Emmanuel"];

// const nameOlder = document.getElementsByClassName('name')

// nameOlder[0].innerHTML += '<div class= "name">Richard</div>'
// nameOlder[1].innerHTML += '<div class= "name">Favour</div>'
// nameOlder[2].innerHTML += '<div class= "name">Juliet</div>'
// nameOlder[3].innerHTML += '<div class= "name">Emmanuel</div>'

// console.log(nameOlder[0].innerHTML);

// console.log(nameOlder);

//forEach
// names.forEach( (n) => {

// })

//map
// const listElements =names.map( (name) =>{
//     const li = document.createElement('li')
//     li.textContent = name

//     return li
// })

// console.log(listElements);

// listElements.forEach( (item) =>{
//     list.appendChild(item)
// })

//new map
// const elementString = names.map( (name) =>{
//     return `<li>${name}</li>`
// })

// console.log(elementStrings);
// console.log(elementStrings.join(''));

// const reviews = [
//   [
//     "When my daughter was in Jss2 at her previous school, computer class meant copying routes offa blackboard. By the end of Jss3 at Aba premier she was building responsive web pages and wiring circuits",
//     "EO",
//     "Engr.Emeka onyekachi",
//     "GRA Aba, parent of an SS1 student",
//     0,
//   ],
//   [
//     "The reliable power was a big deciding factor for us, During a city-wide outage, the classrooms were still cool,bright and quiet, with no diesel fumes and no disrupted experiments.",
//     "CN",
//     "Chief (Mrs.) Chinyere Nwachukwu",
//     "Ogbor Hill, parent of Jss2 & SS2 students",
//     0,
//   ],
//   [
//     "I represented Abia State at the National Young Inventors Robotics Championship in Abuja. Everything we used on stage was taught in our STEM lab",
//     "KU",
//     "Kamsiyochukwu U",
//     "Head Boy, Class of 2024 (9 AIs in WAEC)",
//     1,
//   ],
// ];

// const review = document.getElementById("reviews");
// const newReview = reviews.map((reviews) => {
//   return `<div>
//     <p>${reviews[0]}</p>
//     <h1>${reviews[1]}</h1>
//     <h2>${reviews[2]}</h2>
//     <h3>${reviews[3]}</h3>
//     <li>${reviews[4]}</li>
//     </div>
//     `;
// });
// review.innerHTML = newReview.join('');
// console.log(review);
// console.log(review.join(...newReview));


// Filter() - checks for items who pass a certain condition and returns a new array with the items that pass the condition
// the callback function should return a boolean value (true or false)
// that should be kept or filtered out of the new array
// that also means that any item that returns true will be kept in the new array and any item that returns false will be filtered out of the new array

// const names = ["Richard", "Favour", "Juliet", "Emmanuel"];

// console.log(names.filter( (name) =>{

//   if (name.length === 6){
//     return true
//   }
// }));


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const test = numbers[0] >= 5;
// console.log(test);

// const newArray = numbers.filter((number) => {
//   if(number <= 5){
//     return true
//   }
//   return number
// });

// console.log(newArray);

// function filterfunc(array, callback){
//   const newArray = [];

//   for(i = 0; i < array.length; i++){

//     if(callback(array[i]) === underfined){
//       continue //skip
//     }

//   newArray.push(callback(array[i]))
//   }
//   return newArray
// }

// console.log(filterfunc([1,2,3,99,88,29,12,9], (number) => {
//   if(number >= 50){
//     return number
//   }
// }));

// const user = [
//   {name:'Ckay', age:12, Active: false},
//   {name: 'MrFun', age:50, Active: true},
//   {name: 'Favour', age: 100, Active:true},
//   {name: 'ikuku', age: 9, Active: false},
// ]

// console.log(user.filter ( (user) =>{
//   if(user.age < 18)
//     return false
//  if(user.Active === false)
//     return false
//  return true
// }));

// const eligibleUsers = user.filter((user) => {
//   if (!user.active) return false;
//   if (user.age < 18) return false;
  
//   return user;
// })

// const eligibileUsersArr = user.filter(isEligible)
// console.log(eligibileUsersArr);

// function isEligible(user){
//   if(!user.active) return false;
//   if(user.age <= 18) return false;

//   return user
// }

// const people = [
//   {firstName: 'Alice', lastName: 'Smith', age: 30},
//   {firstName: 'Bob', lastName: 'Jones', age: 25},
//   {firstName: 'Cara', lastName: 'Smith', age: 35},
//   {firstName: 'David', lastName: 'Brown', age: 25},
//   {firstName: 'Eve', lastName: 'Jones', age: 28},
//   {firstName: 'Frank', lastName: 'Smith', age: 25},
//   {firstName: 'Grace', lastName: 'Brown', age: 35},
//   {firstName: 'Heidi', lastName: 'Adams', age: 28},
// ]

// console.log(people.filter( (people)=>{
// if(people.age < 30)
//   return false
// return true
// }));
// const repeatedNames = people.filter((person, index, array) =>
//   array.filter(p => p.lastName === person.lastName).length > 1
// );

// console.log(repeatedNames);

//? .reduce(callback, initialValue) - its takes a callback function and an initial value as arguments. It reduces the array to a single value by applying the callback function to each element of the array, accumulating the result. The callback function takes four arguments: accumulator, currentValue, currentIndex, and array. The initialValue is optional and is used as the first argument to the first call of the callback function. If no initialValue is provided, the first element of the array will be used as the initial accumulator value, and the iteration will start from the second element.
//* That value can be a number, string, object,array and anything

// const num = [1, 2, 3, 4, 5];
// const sumofNums = nums.reduce((accumulator, currentValue) =>{
//     return accumulator + currentValue
// }, 10)
// console.log(sumofNums);

// const foodItems = [ 'Eba', 'Rice', 'Beans', 'Yam',]

// const foodString = foodItems.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue + " "
// }, "")

// console.log(foodString);

// const result = votes.reduce( (acc, vote) =>{
//     if(!acc[vote]) {
//         acc[vote] = 0
//     }

//     acc[vote] = acc[vote] + 1

//     return acc
// }, {})

// console.log(result);

// const customers = [
//   {
//     id: 1,
//     firstName: "James",
//     lastName: "Anderson",
//     age: 28,
//     gender: "Male",
//     email: "james.anderson@example.com",
//     totalSpent: 450000,
//     accountStatus: "Active"
//   },
//   {
//     id: 2,
//     firstName: "Grace",
//     lastName: "Okafor",
//     age: 34,
//     gender: "Female",
//     email: "grace.okafor@example.com",
//     totalSpent: 2850000,
//     accountStatus: "Active"
//   },
//   {
//     id: 3,
//     firstName: "Michael",
//     lastName: "Bello",
//     age: 22,
//     gender: "Male",
//     email: "michael.bello@example.com",
//     totalSpent: 18000,
//     accountStatus: "Active"
//   },
//   {
//     id: 4,
//     firstName: "Amina",
//     lastName: "Yusuf",
//     age: 41,
//     gender: "Female",
//     email: "amina.yusuf@example.com",
//     totalSpent: 360000,
//     accountStatus: "Active"
//   },
//   {
//     id: 5,
//     firstName: "David",
//     lastName: "Okonkwo",
//     age: 31,
//     gender: "Male",
//     email: "david.okonkwo@example.com",
//     totalSpent: 1725000,
//     accountStatus: "Active"
//   },
//   {
//     id: 6,
//     firstName: "Blessing",
//     lastName: "Adeyemi",
//     age: 26,
//     gender: "Female",
//     email: "blessing.adeyemi@example.com",
//     totalSpent: 135000,
//     accountStatus: "Active"
//   },
//   {
//     id: 7,
//     firstName: "Samuel",
//     lastName: "Ibrahim",
//     age: 52,
//     gender: "Male",
//     email: "samuel.ibrahim@example.com",
//     totalSpent: 5200000,
//     accountStatus: "Active"
//   },
//   {
//     id: 8,
//     firstName: "Faith",
//     lastName: "Nwosu",
//     age: 19,
//     gender: "Female",
//     email: "faith.nwosu@example.com",
//     totalSpent: 7500,
//     accountStatus: "Active"
//   },
//   {
//     id: 9,
//     firstName: "Peter",
//     lastName: "Eze",
//     age: 37,
//     gender: "Male",
//     email: "peter.eze@example.com",
//     totalSpent: 2100000,
//     accountStatus: "Inactive"
//   },
//   {
//     id: 10,
//     firstName: "Esther",
//     lastName: "Olawale",
//     age: 29,
//     gender: "Female",
//     email: "esther.olawale@example.com",
//     totalSpent: 525000,
//     accountStatus: "Active"
//   }
// ]



// const newCustomers = customers.map (customer => {
//     const title = customer.gender === "Male" ? 'Mr' : 'Mrs'
   
//     return {
//         ...customer,
//         full: `${title} ${customer.firstName} ${customer.lastName}`
//     };
// });
// console.log(newCustomers);

// const Customertotal = customers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue.totalSpent 
// }, 0)

// console.log(Customertotal);

 
// const Customeremail = customers.filter((customer) =>
//     customer.email.includes('esther.olawale@example.com')
//  );

// console.log(Customeremail);



// const Customerstatus = customers.filter((customer) =>
//     customer.accountStatus.includes("Inactive")
//  );

// console.log(Customerstatus);

// const Customerspent = customers.filter((customer) =>
//     customer.gender == "Male"
//  );
// const totalSpentByMales = Customerspent.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue.totalSpent 
// }, 0)
// console.log(totalSpentByMales);

// const femaleCustomer = customers.filter((customer) =>{
//     return customer.gender == "Female"
// });
// const totalSpentByFemales = femaleCustomer.reduce((accumulator, currentValue) =>{
//     return accumulator + currentValue.totalSpent
// }, 0)
// console.log(totalSpentByFemales);

// const averageAge = customers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue.age
// }, 0) / customers.length;
// console.log(averageAge);
// const numberofFemales = customers.filter((customer) =>{
//     return customer.gender === "Female"
// }).length;

// const averageAgeofFemale = customers.filter((customer) => { 
//     return customer.gender === "Female" 
// }).reduce((accumulator, currentValue) => {
//     return accumulator + currentValue.age
// }, 0) /numberofFemales
// console.log(averageAgeofFemale);

// const numberofMales = customers.filter((customer) =>{
//     return customer.gender === "Male"
// }).length;

// const averageAgeofMale = customers.filter((customer) => {
//     return customer.gender === "Male"
// }).reduce((accumulator, currentValue) => {
//     return accumulator + currentValue.age
// }, 0) / numberofMales
// console.log(averageAgeofMale);

// const highestSpender = customers.reduce((highest, current) => {
//     return current.totalSpent > highest.totalSpent ? current : highest;
// }, customers[0]);

// console.log(highestSpender);

// let highestSpend = 0

// for(let i = 0; i < customers.length; i++){
//     if(customers[i].totalSpent > highestSpend){
//         highestSpend = customers[i].totalSpent;
//     }
// }
// const highestspenders = customers.filter((customer) =>{
//     return customer.totalSpent === highestSpend
// }) ;
// console.log(highestspenders);

//findIndex
//chaining - using the dot notation or variable

// const usersDB4 = [
//     {id:1, name: Juliet},
//     {id:2, name: Favour},
//     {id:3, name: Richard}
// ]

// usersDB4.forEach( (item) =>{
//     item.school = "ighub"
// });

// userDB4.map( (item) =>{
//     if(item === "Wisdom"){
//         item.gender = 'male'
//     }
    
//     if(item === "Richard"){
//         item.gender = 'male'
//     }
    
//     if(item === "Alice"){
//         item.gender = 'female'
//     }
//     return item
// }).filter( (item) =>{
//     return item.gender === 'male'
// }).reduce((acc, curr) =>{
//     acc.push(curr.name)
//     return acc
// }, []).includes('Richard')

// const counter = ViewTransitionTypeSet.reduce((acc, curr) =>{
//     if(!acc.yes){
//         acc.yes = 0
//     }

//     if(!acc.no){
//         acc.no = 0
//     }

//     if(curr === 'yes'){
//         acc.yes = acc.yes + 1
//     }

//     if(curr === 'no'){
//         acc.no = acc.no + 1
//     }

//     return acc
// }, {})

// console.log(counter);

//sorting
//The comparator functionis a function that uses a callback
//with the two parameter
//the array using what is being returned

// const numSorted = [1,7,11,4,3,7,8].sort( (a,b)=>{
//     if(a< b){
//         return 1
//     } else if (a > b){
//         return -1
//     } else {
//         return 0
//     }
// })
// console.log(numSorted);

//? We can write shoter callback function
//  How do we swap items in an array

// const stringArray = ['banana', 'Apple', 'cherry']
// let holsThis = stringArray[1]
// stringArray[1] = stringArray[0]
// stringArray[0]= holdThis
// console.log(stringArray);

// const stringArray = ['banana', 'Apple', 'cherry']
// console.log( stringArray)

//localcompare() - compares two strings in the current locale it compare two strn befor converting them to lower case and then returns a number indicating whether the first string comes before, after, or is the same as the second string in sort order. It is used to sort strings in a way that is sensitive to the language and culture of the user.

//without .localCompare(), all uppercase letters get sorted before lowerscase and comparison i done `

// console.log("a".localeCompare("b"));
// console.log("b".localeCompare("a"));
// console.log("a".localeCompare("a"));

// const testArray = ['a', 'b', 'c', 'd', 'e']
// let count = 0;
// for(i =0; i < testArray.length; i++){
//     for(j = 0; j < testArray.length; j++){
//         console.log(testArray[i], testArray[j]);
//         count++
//     }
// }
// console.log(count);

// const users = [
//     {name: 'Bob', age: 25},
//     {name: 'Cara', age: 35},
//     {name: 'Chiamaka', age: 25},
//     {name: 'Cara', age: 35},
//     {name: 'Alice', age: 30},
// ]

// // const userByAge = users.sort( (a,b)=> {
// // return b.age - a.age
// // })
// // console.log(userByAge);

// const userByAge = users.sort( (a,b)=> {
// return a.name.length - b.name.length
// })
// console.log(userByAge);

// const people = [
//   { firstName: 'Alice',  lastName: 'Smith',   age: 30 },
//   { firstName: 'Bob',    lastName: 'Jones',   age: 25 },
//   { firstName: 'Cara',   lastName: 'Smith',   age: 35 },
//   { firstName: 'David',  lastName: 'Brown',   age: 25 },
//   { firstName: 'Eve',    lastName: 'Jones',   age: 28 },
//   { firstName: 'Frank',  lastName: 'Smith',   age: 25 },
//   { firstName: 'Grace',  lastName: 'Brown',   age: 35 },
//   { firstName: 'Heidi',  lastName: 'Adams',   age: 28 },
// ]

//? Complete the following tasks
// Sort the Array using firstName
// Sort the Array using lastname
// Sort the Array using Age
// Sort the Array using all the properties at the same time 

// const sortedByFirstName = people.toSorted((a, b) =>
//   a.firstName.localeCompare(b.firstName)
// );

// console.log(sortedByFirstName);

// const sortedByLastName = people.toSorted((a, b) =>
//   a.lastName.localeCompare(b.lastName)
// );
// console.log(sortedByLastName);


// const sortedByAge = people.toSorted((a, b) => a.age - b.age);

// console.log(sortedByAge)

// const sortedPeople = people.toSorted((a, b) =>{
//   return(a.firstName.localeCompare(b.firstName) ||
//    lastName.localeCompare(b.lasttName) ||
//   a.age - b.age
// ) 
// });

// console.log(sortedPeople);

//imutable Sorting and Reversing
//WE don't want to change the original array

// console.log(months.with(0, 'Sep'));
// console.log(months.with(-1, 'Jun'));

//Forin

// const user = {
//     name: "Richard",
//     state: "Abia",
//     activeStatus: true,
//     gender: 'male'
// }

// for(pro in user){
//     console.log(`${key}: ${user[key]}`);
    
// 

const people = [
  { firstName: 'Alice',  lastName: 'Smith',   age: 30 },
  { firstName: 'Bob',    lastName: 'Jones',   age: 25 },
  { firstName: 'Cara',   lastName: 'Smith',   age: 35 },
  { firstName: 'David',  lastName: 'Brown',   age: 25 },
  { firstName: 'Eve',    lastName: 'Jones',   age: 28 },
  { firstName: 'Frank',  lastName: 'Smith',   age: 25 },
  { firstName: 'Grace',  lastName: 'Brown',   age: 35 },
  { firstName: 'Heidi',  lastName: 'Adams',   age: 28 },
]

//? Object Destructuring
const {firstName, age } = people[0]
console.log(firstName);
console.log(age);

//? Array Destructuring
const [firstObj, secondObj, thirdObj, fourthObj] = people
console.log(firstObj);
console.log(secondObj);
console.log(thirdObj);
console.log(fourthObj);

const employees = [
    { name: 'Richard', dept: 'Engineering', salary: 100000},
    { name: 'Chiamaka', dept: 'Marketing', salary: 300000},
    { name: 'Ckay', dept: 'Engineering', salary: 200000},
    { name: 'Favour', dept: 'Management', salary: 300000},
    { name: 'Solace', dept: 'Marketing', salary: 300000},
    { name: 'Juliet', dept: 'HR', salary: 300000},
]
// const groupByDept = Object.groupBy({dept} => {
//     return {dept}})


const testArray = new Array(5)
console.log(testArray);

testArray[0] = 'Fear Fear'
testArray.push = ('Fear')
console.log(testArray)

//We can use .fill()to fill an empty
testArray.fill({test: 'value'})
console.log(testArray)

//HTML collection
const listItems =document.getElementsByClassName('item')
//Nodelist
const listItems2 =document.getElementById('list').childNodes

console.log(listItems);
console.log(listItems2);

// console.log(listItems.forEach( (item) => {
//   console.log(item);
  
// }));


//Array.isArray() - returns true or false
//check whether the argument is an array

console.log(Array.isArray('String'))

function checkArray(array){
 
  if(Array.isArray(array)){
    console.log('This is an array');
    
  }else{
    console.log('THis is not an array');
    
  }
}

checkArray(1)
checkArray({some: 'thing'})
checkArray([1,3,4,5,6])
checkArray('String ............')

//import and export