// let state1 ="Abia"

// const a =0, b = 2, c = 3;

// export default state1

// export default function move(){

// }


//Renaming variables on their way out
// export{
//     localData as userMetrics
//     init as initializeApp
// };

//When another file import these modules,
//it must request the newly exported public names(userMetrics and initializeApp).
//The original internal names(localData and init) are compleely hidden from the outside world

//?Combined Exports
//export {state as easternState} from './abia.js'
//export {state as westernState} from './lagos.js'


//?Live Binding - to be explained
// export let count = 0;
// export function increment 

// const myName = 'Mane'
// // console.log(myName);

// const userName = 'Richard'
// // console.log(userName);

// export {myName, userName};