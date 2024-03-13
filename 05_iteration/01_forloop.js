//for loop
for(let index = 0; index < 10 ; index++){
    const element = index;
    console.log(element);
}

let myArray = ["flash" , "batman" , "superman"]

//first way
for(let index = 0 ; index < myArray.length ; index++){
    const element = myArray[index];
    console.log(element);
}


//second way


let arr = [1,4,6,7,4,90];

let store = arr.reduce((sum , value) => {
    return sum + value;
} , 0)

console.log(store);


//object iteration

let obj1 = {
    name: "sumant",
    lastName: "Pandey",
    class: "12th",
    fName: "Ranjeet"
}

for(let keys in obj1){
    console.log(`${keys} : ${obj1[keys]}`);
}

//map

let mapStore = new Map();

mapStore.set("name" , "sumant");
mapStore.set("Batch" , "Y20");
mapStore.set("srNo" , "7845384");
mapStore.set("latname" , "Pandey");

mapStore.forEach((value , key) => {
    console.log(`${key} : ${value}`);
})


 
