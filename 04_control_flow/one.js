// if

// const isUserLoggedIn = true
const temp = 41

if(temp === 41){
    // console.log("less than 50")
}

else{
    // console.log("tempreture is greater than 50")
}

// console.log("Execute")
// > , < , <= , >= , == , != , === , !==

const score = 200

if (score > 100){
    let power = "Won"
    // console.log(`power : ${power}`)
}
// console.log(`New power : ${power}`)

const balance = 1000

// if (balance > 600) console.log("test"), console.log("test2")
    
// if (balance < 500){
//     console.log("less than 500")
// }
// else if (balance < 750){
//     console.log("less than 750")
// }
// else if (balance < 900){
//     console.log("less than 900")
// }
// else{
 
//     console.log("balance is less than 1200")
// }

const userLoggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

let minPrice = 200

if(userLoggedIn && debitCard && minPrice >100){
    console.log("allow to buy course")
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}

