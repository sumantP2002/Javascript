const accountId = 144553
let accountEmail = "sumant.gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2        //Not allowed to change const
// console.log(accountId);

accountEmail = "he@gmail.com"
accountPassword = "2121121"
accountCity = "Patna"

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])

/* NEVER USE VAR BECAUSE OF ISSUE IN SCOPE */

/* if value not assigned then assigned with undefined */
