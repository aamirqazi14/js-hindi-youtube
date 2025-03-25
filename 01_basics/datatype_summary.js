// Primitive Datatype :

// Note : primitive type are called by value, when you one value to another the original data is not given, copy of it provided

// 7 Types : String, Number, Boolean, Null, undefined, Symbol, BigInt 

// undefined : variable declared, memory space declared, value is yet to be assign


const score = 100;
const scoreValue = 100.3; // it does not have separately float as datatype, this is also number, float is also come under number 

const isLoggedIn = false;
const outSideTemp = null;
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')


// console.log(id === anotherId);

const bigNumber = 6463143131413144451n;

// Reference Datatype (Non Primitive) :

// Note : If you want to master JavaStript, Master JavaStript Objects & Browser Web Events

// Array, objects, Functions

const heros = ["Virat Kohli", "Phil Salt", "Krunal Pandya"];
let myObj = {
    name : "Aamir",
    age : 22,
} // between this curly brackets is object // and we can store objects in variable

// datatype can be string, number, boolean, function, array or it can be object

const myFucntion = function(){ // we can store function defination in variable 
    // console.log("Hello world");
}

// console.log(typeof bigNumber);



// *****************************************************************************************************************************


// Stack (Primitive), Heap (Non-Primitive)


// In Stack values is stored if copied to other variable then the copy of that value is provided not the original value
// In Heap value is stored and if copied to other then the original value is provided

let myLaptopBefore = "HP Pavillion"

let myLaptopAfter = myLaptopBefore;
myLaptopAfter = "HP Victus"

// console.log(myLaptopBefore);
// console.log(myLaptopAfter);

let userone = {
    name : "Aamir Qazi",
    email : "aamir@gmail.com"
}

let usertwo = userone

usertwo.email = "qazi@gmail.com"

console.log(userone.email);
console.log(usertwo.email);