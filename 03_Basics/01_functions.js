//function

function sayMyName(){
    console.log("sumant");
}

sayMyName();


//add two number
function addTwoNum(num1 , num2){
    return num1 + num2;
}

let temp = addTwoNum(4 , 5);
console.log(temp);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return;
    }
    return `${username} just Logged in`;
}

//if nothing is provided as argument then it take it as undefined 
//so we first check using if else way
const result = loginUserMessage();  
console.log(result);
