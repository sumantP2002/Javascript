let score = "33"
//check the data type
console.log(typeof(score));

//conversion to number

let changedScore = Number(score);
console.log(typeof(changedScore));
//if the string is not able to convert to number then it lead to NaN

/*  to STRING
    "33" -> 33
    "33abc" -> NaN
    true -> 1
    null -> 0
    undefined -> NaN
*/

let isLogged = 1;
let valueInNum = Boolean(isLogged);
console.log(typeof(valueInNum));

/*  TO BOOLEAN
    1 -> true
    0 -> false
    "sumant" -> true
*/

let someNum = 33
let stringNum = String(someNum);

console.log(typeof(stringNum));