// const user = {
//     username : "Aamir",
//     product_price : 899,

//     welcomeMessage : function(){
//         console.log(`${this.username} , Welcome to the website`);
//         console.log(this);
//     }
// }


// user.welcomeMessage()
// user.username = "Qazi"
// user.welcomeMessage()


// console.log(this)

// function chai(){
//     let username = "Aamir"
//     console.log(this.username)
//         console.log(this) // output is global object values

// }

// const chai = function (){
//         let username = "Aamir"
//         console.log(this.username)
//         console.log(this) // output is global object values
//     }


// const chai = () => {
//     let name = "Aamir"
//     console.log(this.name)
//     console.log(this) // output is undefined
// }
// chai()


// const addTwo = (num1,num2) =>  {
//     return num1+num2 // explicitly return keyword is used
// }

// const addTwo = (num1,num2) => num1+num2  // it is done implicitly 

// const addTwo = (num1,num2) => (num1+num2) // same here 

// console.log(addTwo(5,8))

// const addTwo = (num1,num2) => ({username : "Aamir"}) // parentheses can used for returning object 

// console.log(addTwo(5,8))

// const myArray =  [1,2,3,4,5,6]

