// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

// using ticks for a template string
function greet(name){
    
    return `Hello, ${name} how are you doing today?`
}
// using the replace function
function greet2(name){
    return "Hello, <name> how are you doing today?".replace('<name>', name)
}

// using an arrow function
const greet3 = name => `Hello, ${name} how are you doing today?`;
