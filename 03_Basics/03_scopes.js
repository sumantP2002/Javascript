let a = 10
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);

// scope -> {}

// 1> Global scope
// 2> block scope

//Closure : child function can access parent function variable

function one(){
    const username = "sumant";

    function two(){
        const website = "youtube"
        console.log(username);
    }

    //console.log(website);
    two();
}

one();

//here there is error because of hoisting 
addTwo();
const addTwo = function(num){
    return num+2;
}