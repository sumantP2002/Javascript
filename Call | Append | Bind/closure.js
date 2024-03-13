let func1 = function(){
    let x = 5;
    let func2 = function(){
        console.log(x);
    }

    return func2;
}

let result = func1();       //after this func1 no longer exist and all local variable vanish
console.log(result);
result();       //result is not just function that is returned but a closure is returned the has function + laxical scope;  -> so it still remember x.