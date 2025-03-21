const accountId = 123

let accountEmail = "aamir@gmail.com"
var accountPassword = "123456"
accountCity = "Nagpur" // Not Recommended

accountId = 23 // Not Allowed

accountEmail = "amir@gmai.com"
accountPassword = "98765"
accountCity = "Bangalore"

console.log("accountEmail")
console.log("accountPassword")
console.log("accountCity")

console.table([accountId,accountEmail,accountPassword,accountCity])
/*
    prefer not to use var, because  of issue in 
    block scope and functional scope
*/