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


//*****************OPERATIONS***********

let str1 = "hello"
let str2 = "sumant"
let str3 = str1 + str2;

console.log(str3);


// confusing
console.log("2" + 1);   //21
console.log(2 + "1")    //21
console.log("2" + 1 + 2)    //212
console.log(2 + 1 + "2")    //32
console.log(5+7+"5");   //125

//confusing 2
console.log(+true)  //1
console.log(+"")    //0

//confusing 3(prefix and postfix)

let gameCounter = 100
console.log(gameCounter++);
