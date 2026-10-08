// function composeEmail(subject, body, receiver, func1, func2, func3){

//     const validateSubject = func1(subject)
//     const validateBody = func2(body)
//     const validateEmail = func3(receiver)
//     const Sender = getSender()


//     const message = {
//         subject: validateSubject,
//         body: validateBody,
//         receiver: validateEmail,
//         Sender: 'Richard',
//     }
    
//     return message
    
    
// }

// function checkSubject(subject){
//     if (subject === ''){
//         throw new Error('subject is required')
//     }
//     if (subject.includes('fuck')){
//         throw new Error('f word cannot be used in my work are you dumb')
//     }
//     return String(subject.toUpperCase())
// }

// function checkBody(body) {
//     if (body === '' || body.includes('fuck')){
//         throw new Error('Body is not valide')
//     }
//     return String(body);
// }

// function checkReceiver(receiver){
//     if(!receiver || receiver === ''){
//         throw new Error('Invalid Email')
//     }
//     return String(receiver);
// }

// function getSender(){
//     return 'Richard'
// }

// function sendEmail(email){
//     console.log('Email details gotten ...')
//     console.log("Email subject is: " + email.subject)
//     console.log("Email body is: " + email.body)
//     console.log("to: " + email.receiver)
//     console.log("from: " + email.Sender)
// }

//setTime Out : it takes in a callback function, it is a function or a method that can be used to delay the execution of another function
// it takes in two major argument(infinit), the first argument is a function and the second is the delayed time in milliseconds

// setTimeout(function(){
//     console.log('Welcome new word, how are you?')
// }, 50000)

// //there are three (3) Queue in JavaScript
// //CAll stack
// //microtask
// //macrotask queue

// sendEmail(composeEmail('Tech Tribe', 'I am going to be rich', 'Johnbrian@gmail.com', checkSubject, checkBody, checkReceiver, getSender) );

// //setTimeout

// console.log ('popular in js')
// const print = console.log;

// print('this function will run like console.log')

// function setTime(callback, delay){

//     callback()
// }
// console.log()

// try{
//     const some = i
//     console.log(some)
// }
// catch(error){
//     if(error.message === 'i is not defined'){
//         console.log('i is not defined')
//     }
// }

// setTimeout(console.log('Now proceeding Sending Email..'), 5000)
// function callback( ) {
//     console.log('Now proceeding Sending Email..');
    
// }
// setTimeout(callback,3000)

setTimeout(console.log,3000, "This print after my money")

//pass by value is something that is resolved by js without going to the heap
//pass by refrerence is something that is resolved by js by going to the heap 


//synchronous vs asynchronous programming
// setTimeout is an asynchronous programming because it does not block the execution of other code, it allows other code to run while keeping the code in the webapi, it then sent to the macrrotask queue there it is paused by the event loop which looks if the callstack is empty to executes.


// setInterval is a function that is used to execute a function repeatedly after a certain interval of time, it takes in two arguments, the first argument is a function and the second argument is the interval time in milliseconds.

Element.addEventListener('click', function(){
 //something
})