// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`New DB CONNECTED ${name}`)
})("Virtually")



// Avoids Global Scope Pollution → Variables inside an IIFE are private.

// Encapsulation → Creates a private scope, preventing accidental variable modification.

// Executes Code Immediately → Runs as soon as it's defined, useful for initialization tasks.

// Avoids Conflicts in JavaScript Libraries → Prevents variable name clashes.

// Allows Parameter Passing → Can receive arguments like a normal function.

