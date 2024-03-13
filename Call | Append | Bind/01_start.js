let student = {
    name: "sumant",
    roll: "20uec134",
    branch: "ece",
    batch: "y20",

}

function sayIntro(...hometown){
    console.log(`name is ${this.name} and roll is ${this.roll} and lives in ${hometown[0]} ${hometown[1]}, ${hometown[2]}`);
}

let student2 = {
    name: "amit",
    roll: "20ucc134",
    branch: "Me",
    batch: "y21",

}

// sayIntro.call(student , "delhi")


//if we have many parameter

sayIntro.apply(student2 , ["karol" , "bagh" , "delhi"])

// bind methoud

let store = sayIntro.bind(student , "karol" , "bagh" , "delhi")
store();


//curring in js

let multiply = function(x , y){
    console.log(x*y);
}

let multiplyby2 = multiply.bind(this , 2);      //here we preseet some value of function and call with remaining value via argument.
multiplyby2(3);
