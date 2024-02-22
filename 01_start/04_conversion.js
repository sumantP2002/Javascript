 //confusion

 console.log(null > 0); //false
 console.log(null == 0) //false
 console.log(null >= 0) //true

 //this is because the equality check(==) and comparision(< , > , <= , >=) work differently (comparision convert null to 0)

 console.log(undefined > 0); //false
 console.log(undefined == 0) //false
 console.log(undefined < 0) //false

 // === -> strict check
 // ==  -> not strict