const user = {
    username: "sumant",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
    }
}

// user.welcomeMessage()

console.log(this);

// function chai(){
//     console.log(this);
// }
// chai();

//arrow function

const chai = () => {
    let username = "hitesh"
    console.log(this);
}

chai();

//arrow function 2 : (parameter)=>(define fucntion)

const addTwo = (num1 , num2) => {
    return num1 + num2;
}

//or

const addTwoNew = (num1 , num2) => (num1 + num2);

//eg

const myFunc = (num1) => ({name: "sumant"});
