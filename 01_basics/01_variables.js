const accountId = 144553
let accountEmail = "nishant@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "nishant@.com"
accountPassword = "21212121"
accountCity = "talala"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])