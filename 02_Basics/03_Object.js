//Two ways to create object in JS

//1. using constructor
//Object.create -> in this singleton is created

//1 . object literals -> no singleton
const mySym = Symbol("key1");

const jsUser = {
    name: "sumant",
    location: "Jaipur",
    isLoggedIn: false,
    [mySym]: "mykey1",
    email: "sumant@google.com",
    lastLoginDays: ["Monday", "Saturday"]
}

//two ways to get the value
//here imp to note how to use symbol in objects
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);

//to prevent further changes in object
//Object.freeze(jsUser);

//console.log(jsUser);

//adding function to the object
jsUser.greeting = function(){
    console.log("Hello sumant");
}

//to reference the same object use "this"
jsUser.greeting2 = function(){
    console.log(`Hello JS user ${this.name} `);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());

