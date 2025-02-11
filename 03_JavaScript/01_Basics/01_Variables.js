const accountId = 144553
let accountEmail="hitesh@google.com"
var accountPassword="12345"
accountCity="Jaipur"  // JS is safe so it will not give error but not a good practice.

// accountId=2// not allowed
accountEmail="akas@gmail.com"
accountPassword="21323"
accountCity="bengaluru"
let accountState
console.log(accountId)
console.log(accountState) // undefined ;
/*
prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
