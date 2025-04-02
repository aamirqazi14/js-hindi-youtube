function sayMyName(){
    console.log("A")
    console.log("A")
    console.log("M")
    console.log("I")
    console.log("R")
}

// sayMyName() // only function name is Reference and with parentheses is Execution

// function addTwoNumbers(number1,number2){ // inside the parentheses is two Parameters
//     console.log(number1+number2)
// }

// addTwoNumbers(4,5) // inside the parenthese is two Arguments

function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // return result
    return number1+number2
    
}

// const result = addTwoNumbers(6,2) 
// console.log(result)

// console.log(addTwoNumbers(6,2))

function loginUser(username){
    if(!username){
       console.log("please write the username")
       return
    }
    return `${username} just logged in`
}

// console.log(loginUser())
// console.log(loginUser("Aamir"))


// **********************************************************************************************************************


// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,100,400,600))

const user = {
    username : "Aamir",
    price : 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and product price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username : "Qazi",
    price : 499
})

const numberArray = [100,200,300,400,500,600]

function returnThirdValue(anyArray){
    return anyArray[2]
}

// console.log(returnThirdValue(numberArray))
console.log(returnThirdValue([100,200,300,400,500,600]))