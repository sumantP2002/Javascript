const Name = "Sumant"
const repoCount = 50;

console.log(`Hello my name is ${Name} and my repoCount is ${repoCount}`);

//methoud
//1> keyvalue
console.log(Name[0]);
console.log(Name.__proto__);


console.log(Name.length);
//these methoud are inside proto but we can use it withoud word prototype
console.log(Name.toUpperCase());
console.log(Name.charAt(2));
console.log(Name.indexOf('t'));

//in substring we cannot use -ve index but in slice we can use it
const newString = Name.substring(2, 3)
console.log(newString);

const anotherString = Name.slice(-4 , 5);
console.log(anotherString)

const newStringOne = "      hitesh     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sumant%20pand%20ey.com"
console.log(url.replace('%20', '-'));
console.log(url.replaceAll('%20', '-'));
console.log(url.includes('com'));   //return true or false

console.log(url.split('%20'));  //convert to array



