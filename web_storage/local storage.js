localStorage.clear()

localStorage.setItem('name', 'Chiamaka')
localStorage.setItem('age', 12)
localStorage.setItem('favouriteColors', ['black', 'red'])
localStorage.setItem('familyTree', {father:1, mother:1, sisters:4, brothers:2 });
localStorage.setItem('boolean', true);

console.log(localStorage);
console.log({father:1, mother:1, sisters:4}.toString);

//? How to retrieve items from localStorage
// to retrieve from localStorage , use .getItem() method
// it return  null if the key is "missing"
console.log(localStorage.getItem('name'));

//Data Serilization is Data conversion
//Serilization + converting an in-memory data structure into a format that can be
//  stored or transmitted and reconstructed later

//Serilization generally means "convert to a storable/transmittable format"
//JSON is the common case for localStorage, but there are other formats as well

//What that means is, we convert the data before we store,
//and we also have to convert again after retrieval.

//Serialize (object -> string)
const user = {name: "Amaka", age: 12, tags: ["math", "english", "biology"]};
localStorage.setItem('user', JSON.stringify(user));
console.log(localStorage);

const retrievedUser = localStorage.getItem('user');
console.log(retrievedUser);

console.log(JSON.parse(retrievedUser));

//Deserialize (string -> object)
// fetch it from localStorage (current a string)

const raw = localStorage.getItem("user")

if(raw === null){
    console.log("DATA is not FOUND");
}else{
    parsedData = JSON.parse(raw)
}

if(raw){
    parsedData = JSON.parse(raw)
}

parsedData = raw ? JSON.parse(raw) : 'DATA NOT FOUND'


// const parsed = JSON.parse(raw)