//The apply() method of Function instances calls this function with a given this value,
//and arguments provided as an array (or an array-like object).

function ptaNhi(fn,delay){
    // console.log(arguments);  //[Arguments] { '0': 'hitesh', '1': 2 }
    // console.log(arguments[0]); // hitesh
    // console.log(arguments[1]); // 2 i.e arguments is array-like object
    let myId;
// Tiffin Concept i.e when function returns from a functions it takes all the variables access along with it.
// ex-myId. It is also called closure
    return function(...args){
        clearTimeout(myId); // Clears the previous timeout.
        // In some cases we need to stop setTimeout using clearTimeout function, for that we need reference of 
        // setTimeout so we hold it in a variable.
        myId = setTimeout(()=>{
            // This setTimeout is async Js and it does not have context when it goes to task queue or async route.
            // For that we are using .apply and apply let us pass the arguments that we want.
            console.log(args);
            fn.apply(this,args);
        },delay)
    }
}
function greet(name){
    console.log(`Hello ${name}`)
}
let myfn = ptaNhi(()=>greet("akshat"),2000); // This is used many many times in React Js. 
// If your directly write greet("akshat") it will directly call but we dont want that , we want it to call later 
// when we call returned function later. 
myfn("i am the argument"); 
myfn("i am the argument2"); 
myfn("i am the argument3"); 
//[ 'i am the argument3' ]
// Hello akshat
// Only This output will come i.e latest call
// This is due to clearInterval.
// Suppose a user again & again hitting a button which cause API to call , we want to call API for the lastest,
// input entered by user only.
// Example : You are writing something on google search bar, as you write a letter a API is called to give 
// suggestions but user is typing so fast , so as the user enter next letter, previous API call is cleared.
// This concept is called DEBOUNCING.

// This concept is very important of INTERVIEW
/*
Debouncing in JavaScript (Using Your Example)
What is Debouncing?
Debouncing is a technique used to delay the execution of a function until after a specified period of inactivity. 
This is useful in scenarios like handling search inputs, button clicks, or resizing events to prevent unnecessary 
repeated execution.

Your Example: Debouncing Implementation

function ptaNhi(fn, delay) {
    let myId; 
    return function (...args) {
        clearTimeout(myId); // Clears the previous timeout
        myId = setTimeout(() => {
            console.log(args);
            fn.apply(this, args); // Executes function with latest arguments
        }, delay);
    };
}

function greet(name) {
    console.log(`Hello ${name}`);
}

let myfn = ptaNhi(() => greet("akshat"), 2000);

myfn("i am the argument");
myfn("i am the argument");
myfn("i am the argument");

// After 2 seconds -> Output:
// [ 'i am the argument' ]
// Hello akshat

How It Works

1. ptaNhi(fn, delay)
Takes a function fn and a delay (in milliseconds).
Returns a new function that manages setTimeout.

2.Inside the Returned Function:
clearTimeout(myId); → Cancels any previous setTimeout call.
setTimeout(() => {...}, delay); → Delays function execution.
fn.apply(this, args); → Calls fn with correct this and arguments.

3.Effect of Calling myfn Multiple Times
The function is called three times quickly.
Each call resets the timer, so only the last call (after 2 seconds) is executed.

Key Takeaways
✔ Prevents unnecessary execution by waiting for a pause in calls.
✔ Useful in search inputs, button clicks, and resize events.
✔ Ensures only the final intended function call runs.
*/

//Note : Use regular function in debouncing -> 'this' ka issue aayega in arrow function me.
// this wala concept is doubtfull yet