/*

false : 
1. false
2. 0
3. -0
4. ""
5. null
6. undefined
7. NaN

TRUE :
1. "0"
2. "false"
3. " "
4. []
5. {}
6. function(){}

*/

//Nullish coalescing Operator (??) : null undefined

let val1 = 5 ?? 10
console.log(val1)   //return 5

let val2 = null ?? 10
console.log(val2)   //return 10

//terniary operator

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than equal to 80") : console.log("more than 80")

// condition ? then , else;