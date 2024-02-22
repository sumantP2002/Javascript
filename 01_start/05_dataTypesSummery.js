
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


