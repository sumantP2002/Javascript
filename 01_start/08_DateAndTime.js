let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());

//to declare my date
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString())

let myCreatedDate1 = new Date(2023, 0, 23,5, 3)
console.log(myCreatedDate1.toLocaleString())


let myTimeStamp = Date.now()
console.log(myTimeStamp); 
console.log(myCreatedDate.getTime())  

//convert from ms to s (from 1 jan 1970)
console.log(Math.floor(Date.now()/1000));
 
