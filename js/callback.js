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

const users = [
    { id: 1, name: "MrMe", age: 24, active: false},
    { id: 2, name: "juliet", age: 21, active: true},
    { id: 3, name: "Richard", age: 19, active: true},
    { id: 4, name: "Favour", age: 23, active: true},
    { id: 5, name: "Traitor", age: 17, active: true},
];

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


const obj = { a: 1, b: 2};
const copy = {...obj, c:3}

console.log(copy);



//HIGHER ORDER ARRAY METHODS
//These are strictly for Array, they do not work on all iterables

//? forEach()

[1,3,4,5,6, 'string', null, undefined].forEach(function(my, item){
 console.log(`${my}  ${item}`);
 
})
// function richard (dave, name){
//   dave(name)
// }

// richard(console.log, 'my people be still')