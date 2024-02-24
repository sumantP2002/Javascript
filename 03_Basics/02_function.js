//if i don't knowthe no of argument to take in function -> use rest

//...num1 -> this accumulate all no in an array then operate accordingly
function calculateCartPrice(val1 , val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200 , 400 , 500 , 700 , 50));

//*********for object*********** */

const user = {
    username: "sumant",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);
}

handleObject(user);

//********for array ********** */

const newArr = [200 , 400 , 100 , 600];

function returnSecondvalue(getarr){
    return getarr[1];
}

console.log(returnSecondvalue(newArr));

