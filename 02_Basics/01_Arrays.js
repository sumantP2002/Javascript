const myArr = [0 , 1 , 2, 3, 5];
const heros = ["shaktiman", "chota bheem"]

//array methoud
myArr.push(6);
myArr.pop();
myArr.unshift(9);   //time consuming 
myArr.shift();
 
const newArr = myArr.join() //this will join the array and make it in string
console.log(newArr) 
console.log(myArr);

//slice and splice
// slice take out a portion keeping array as it is
//splice take out a portion and convert array to remaining num only

const myn1 = myArr.slice(1 , 3);
console.log(myn1);
console.log(myArr);
const myn2 = myArr.splice(1 , 3);
console.log(myn2)
console.log(myArr);