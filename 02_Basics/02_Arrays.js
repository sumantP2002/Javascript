const marvel_heros = ["thor" , "IronMan" , "spiderMan"]

const dc_heros = ["superman" , "flash" , "batman" , "sumant"]
/*
 -> marvel_heros.push(dc_heros);    
it is wrong way to merge both array
it take array inside other array
*/
const allHeros =marvel_heros.concat(dc_heros);
console.log(allHeros); 

//spread operator use as concat
const allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[7,8,[4,5]]];
const usuable_array = anotherArray.flat(Infinity);
console.log(usuable_array);

// convert to array
//to check whethr array
console.log(Array.isArray("sumant"))
//to convert to array
console.log(Array.from("sumant"));

//INTERESTING CASE TO CONVERT
console.log(Array.from({
    name: "sumant"
}));    //RETURN EMPTY

//Convert multiple to array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));

