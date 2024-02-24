//Immediately Invoked Function Expression(IIFE)

// ()()
/*
        WHY WE USE IT: 
1> to prevent problem due to global scope.
2> to immediately call the function
*/

(function chai(){
    console.log(`db connected`);
})();

( () => {
    console.log(`db connected 2`);
})();

((name) => {
    console.log(`db connected ${name}`);
})("sumant");