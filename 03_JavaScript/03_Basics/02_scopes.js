// {}  // These curly braces indicate scope of function or if else condition .. obejct curly braces are different..
//  vaise feel agyi hai 
// var ke sath dikkat ye hi thi ki vo scope ke hisaab se nhi chalta tha , iss vajah se sab let ko use karte hai
var c=300
if(true){
    let a =10
    const b=20
    c=30
}
// console.log(a)// error because a has scope inside if
// console.log(b)// error because b has scope inside if
console.log(c) //30 
// Now it is a problem because c was initialised by some user as 300 and in some other file c=30.. this problem is 
// created because var doesnt take care of scopes.. 
// Thats why let is used instead of var in JS
 // inside {} is is called block scope and outside it is global scope 
 // variable declared in global scope can be used can be used inside block scope but not vice versa
let v =300
if(true){
    let v=20
    console.log(v)//20 // block scope
}
console.log(v)// 300 // global scope

// ----------------------------------Very Important Point w.r.t Interview--------------------------
/* Your global scope here in node ennvironment is different from global scope in developers console in google .
It will discussed later using keyword . Till then rememeber the point */




function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username) // hitesh// it can acccess of variables of outside level function one()
    }
    // console.log(website) // error // only inner level have access of outerlevel variables ,
    //  website is inner level variable in function two
    two()
}
one()
// all these function calls have call stack which will be discussed later through diagrams 

//------------------------Same Concept Applies for if else -----------------------------------------
if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website ="youtube"
        console.log(username+website) // hitesh youtube
    }
 // console.log(website)// error 
}

// console.log(username) // error

//+++++++++++++++++++++++++++++++++++++++ INTERESTING AND IMPORTANT++++++++++++++++++++++++++++++++++++++++++++++++
// their are two ways of creating a function
function addone(num){
    return num+1
}

console.log(addone(5))// 6

const addtwo=function(num){
    return num+2
}
console.log(addtwo(7)) // 9

//+++++++++++++++++++++++++++++ BUT ++++++++++++++++++++++++++++++++++

console.log(addthree(5))// 8
function addthree(num){
    return num+3
}


// console.log(addfour(7)) // error Cannot access 'addfour' before initialization
const addfour=function(num){
    return num+4
}
// the point to be noted here is when you call function before initialization it worked in first method but will 
// give error in second method 
// This is somehow related to hoisting which will be discussed later 


// Hoisting:-
/*
🔹 What is Hoisting in JavaScript?

Hoisting Definition according to MDN Docs:
/* JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, 
variables, classes, or imports to the top of their scope, prior to execution of the code. 

Hoisting is a JavaScript mechanism where variables and function declarations are moved ("hoisted") 
to the top of their scope during the compilation phase, before the code is executed.

However, only the declaration is hoisted, not the initialization.

🔹 Hoisting with var
When you declare a variable using var, the declaration is hoisted to the top, 
but the initialization remains in place.

Example 1: var is Hoisted
var is hoisted but not in the Temporal Dead Zone (TDZ) like let and const. 
Instead, var is initialized to undefined during hoisting.

console.log(x); // undefined (not an error, but not initialized)
var x = 10;
console.log(x); // 10
✅ Behind the scenes, JavaScript interprets this as:

var x;  // Declaration is hoisted to the top
console.log(x); // undefined
x = 10; // Initialization stays in place
console.log(x); // 10
🚨 Only the declaration (var x;) is hoisted, not the assignment (x = 10;).


🔹 Hoisting with let and const
let and const are also hoisted, 
but they are not initialized and remain in a "Temporal Dead Zone" until their declaration is encountered.

Example 2: let and const Are Hoisted But Not Initialized (TDZ)

console.log(y); //Reference Error: Cannot access 'y' before initialization
let y = 20;
🔴 Unlike var, let does not get a default undefined value and throws an error.

console.log(z) // Reference Error: z is not defined 
NOTE: See error is different in case of y and z 
i.eit is prove that y is hoisted but it is TDZ otherwise it would have given same error like z 
i.e.Reference Error: z is not defined.

🔹 Hoisting with Functions
Function Declarations Are Fully Hoisted
greet(); // "Hello!"

function greet() {
  console.log("Hello!");
}
✅ Function declarations are fully hoisted, meaning both their name and definition are moved to the top.

Function Expressions Are NOT Hoisted
*/
// sayHi(); // TypeError: sayHi is not a function

// let sayHi = function() {
//   console.log("Hi!");
// };
/*
Your code will throw a ReferenceError: Cannot access 'sayHi' before initialization,
because let variables are in the Temporal Dead Zone (TDZ) until their declaration is executed.
TDZ:-Temporal Dead Zone (TDZ)
The variable exists but cannot be accessed before its declaration is executed.
Accessing it before declaration throws a error ReferenceError: Cannot access 'sayHi' before initialization

*/


