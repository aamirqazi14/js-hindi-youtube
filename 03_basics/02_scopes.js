// Anything inside `{}` (except in an object declaration) is considered a block scope.  
// This includes `if`, `for`, `while`, `function`, and other code blocks.  
// Variables declared with `let` and `const` inside a block are **not accessible** outside the block.  
// Variables declared outside any block are in the **global scope** and can be accessed anywhere in the script.


// var c = 300
let a = 100
if(true){
    let a = 10;
    const b = 20;
    var c = 30; // var is not limited to this block scope it will be accessible in global scope
    // console.log("Inside = ",a)
}

// console.log(a)
// console.log(b)
// console.log(c)

// Global scope in a script (code area) and in the browser console are different.  
// In a script file, global variables belong to the **script scope** (not added to `window` in strict mode).  
// In the browser console, global variables are attached to the `window` object by default.
 

function one(){
    const username = "Aamir"
    
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}
// one()

if(true){
    const username = "Aamir"
    if(username === "Aamir"){
        const website = " youtube"
        // console.log(username + website)
    }

    // console.log(website)

}
// console.log(username);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// interesting


// hoisting
console.log(addone(5))
function addone(num){
    return num+1
}


console.log(addtwo(5))
const addtwo = function(num){
    return num+2
}
