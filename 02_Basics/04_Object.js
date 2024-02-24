//declaring object using constructor
//it create singleton objects
const tinderUser = new Object();
tinderUser.id = "123abc"
tinderUser.name = "sumant"
tinderUser.isLoggerIn = false
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstName: "sumant",
            middleName: "Kumar",
            lastName: "Pandey"
        }
    },
    fName: "ranjeet kumar pandey"
}

console.log(regularUser.fullname.userfullname);

//merge

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
const obj3 = Object.assign({} , obj1 , obj2);

//we use mostly spread
const obj3new = {...obj1, ...obj2};
console.log(obj3);

//taking out the keys of object
console.log(Object.keys(tinderUser));   //return array of all the keys

//taking out values
console.log(Object.values(tinderUser));

//find if the property is there or not inn object
console.log(tinderUser.hasOwnProperty('isLoggerIn'));

