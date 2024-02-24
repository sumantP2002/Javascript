
/*
-> PRIMITIVE -> Call by values

string , Number , bool , null , undefined , symbol , bigint

-> Reference (Non Primitive & call by reference)

Array , objects , functions

*/

//Javascript is dynamically typed and weekly typed language

const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id === anotherId);  //false

//****************************** */

//STACK MEMORY (Primitive data type me use hota hai)
//Heap memory(Non-primitive me use hota hai)

//Example
let myYoutubeName = "College Bhraman"
let anotherName = myYoutubeName; 

let userOne = {
    name: "sumant",
    mail: "sumanttpc@gmail.com"
}

let userTwo = userOne;
userTwo.email = "iamsumant@gmail.com"
console.log(userOne.email); //both have same output
console.log(userTwo.email);

