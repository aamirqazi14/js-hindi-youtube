// singleton 
// Object.create


// object literals

const mysym = Symbol("key1")

const JsUser = {
    name : "Aamir",
    "contact" : 1234567890,
    age : 18,
    [mysym] : "mykey1",
    location : "Nagpur",
    email : "aamir@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday","Tuesday","Wednesday","Thursday","Friday"]
}
// Remember Few Point : 
// console.log(JsUser.email) // mostly we use (.) Dot to access the values 
// console.log(JsUser["email"]) // in some cases we might require to use square brackets []

// console.log(JsUser.contact)
// console.log(JsUser["contact"]);
// console.log(JsUser[mysym]) // this is the right way to user symbol as key in object
// in special cases we must have to use [] square brackets

JsUser.email = "aamir@hotmail.com";
JsUser.email = "aamir@yahoo.com"
// Object.freeze(JsUser);

JsUser.email = "aamir@outlook.com";
// console.log(JsUser) 


JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);// this keyword for current object which is JsUser
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());