// Firstly Read copy of 23/02/2025 to get clear picture.

/*
setInterval() and setTimeout are not part of js infact are part of browser?

You're partially correct! setTimeout and setInterval are not part of the JavaScript language itself, 
but they are provided by the environment in which JavaScript runs.

Who Provides setTimeout and setInterval?
In browsers, setTimeout and setInterval are provided by the Web APIs (part of the browser's runtime environment).
In Node.js, they are provided by the libuv library, which is part of Node.js’s event-driven architecture.
Understanding setTimeout and setInterval in Different Environments.


1. In Browsers
Browsers provide setTimeout and setInterval through the Web APIs.
The JavaScript engine (V8, SpiderMonkey, etc.) sends these calls to the Web APIs, 
which then use the event loop to execute the callback when the timer expires.
console.log("Start");

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
Execution Order (due to the event loop):

Start
End
This runs after 2 seconds


2. In Node.js
Node.js does not have a Web API like browsers.
Instead, it uses libuv, which provides an event loop and asynchronous operations, 
including setTimeout and setInterval.

console.log("Start");

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
Works similarly to browsers, but under the hood, libuv and the Node.js event loop manage the timers.


Are setTimeout and setInterval Really JavaScript?
No! They are not part of the JavaScript ECMAScript (ES) specification. They are part of:

Web APIs (in browsers)
libuv (in Node.js)
This is why if you run JavaScript in a pure ECMAScript environment (like some JS runtimes 
without the browser or Node.js), setTimeout and setInterval won’t exist.
*/

/*
DOM is also not part of js
ChatGPT said:
Yes! The DOM (Document Object Model) is not a part of JavaScript itself. 
Instead, it is provided by the browser environment (Web APIs).

🚀 Why Isn't the DOM Part of JavaScript?
JavaScript (ECMAScript) is a language specification that defines things like variables, loops, 
functions, and objects.
The DOM is an API provided by web browsers that allows JavaScript to interact with HTML and CSS.
JavaScript can manipulate the DOM, but the DOM itself is not defined by the ECMAScript specification.

🌍 Who Provides the DOM?
The DOM is provided by the browser (not JavaScript itself) through the Web APIs, which are implemented in browsers like Chrome, Firefox, Edge, and Safari.

These Web APIs include:

DOM API (e.g., document.querySelector, getElementById)
BOM (Browser Object Model) (e.g., window, navigator, location)
Fetch API (e.g., fetch() for network requests)
*/

/*
fetch is also not part of js
ChatGPT said:
Yes! fetch is NOT part of JavaScript (ECMAScript) but is provided by the browser environment (Web APIs) and modern Node.js versions.

🚀 Why Isn't fetch Part of JavaScript?
JavaScript (ECMAScript) defines the language (variables, functions, loops, etc.).
fetch is a Web API that allows JavaScript to make network requests (like AJAX).
It is implemented by browsers and Node.js (from v18+ with undici).
🌍 Who Provides fetch?
In browsers, fetch is provided by the Fetch API, a part of Web APIs.
In Node.js (before v18), fetch is not built-in, and you had to use external libraries like:
node-fetch
axios
In Node.js (v18+), fetch is now built-in using undici (but it’s still not part of ECMAScript).

*/

// const obj ={
//     userName:"Akash",
//     greet: function(){
//         console.log(`Hello ${this.userName}`);
//     }
// }
// console.log("Hi");
// setTimeout(obj.greet,5)
// console.log("Bye");
/* OUTPUT:
Hi
Bye
Hello undefined

To underStand this code , read cohort copy 23/02/2025 first 4 pages, old js copy lecture 37 theory 
and above commented part . And then finally you will underStand the code. 
*/

// To solve the problem

const obj ={
    userName:"Akash",
    greet: function(){
        console.log(`Hello ${this.userName}`);
    }
}
console.log("Hi");
setTimeout(obj.greet.bind(obj),5)
console.log("Bye");

// Hence , bind as names names justfify binds the fuxnction.

// More difference between call and bind
/*
diff b/w call and bind call does not return but find returns
and call does not bind anything with itself hence cant be used in setTimeout and bind does this

🚀 call vs bind
Both call and bind are used to change the this context of a function, but they work differently.

🔍 call: Executes the function Immediately
call is used to invoke a function with a specified this value.
It does not return a new function; it executes the function immediately.

const obj = { name: "Akshat" };

function greet() {
    console.log(`Hello, ${this.name}`);
}

// Using call
greet.call(obj); // Output: Hello, Akshat
✔ call executes the function immediately with this = obj.
❌ It does not return a new function.

🔍 bind: Returns a New Function
bind does not execute the function immediately.
Instead, it returns a new function with this permanently bound.

const obj = { name: "Akshat" };

function greet() {
    console.log(`Hello, ${this.name}`);
}

// Using bind
const boundGreet = greet.bind(obj);
boundGreet(); // Output: Hello, Akshat
✔ bind returns a new function that can be called later.
✔ The new function remembers this = obj.

🚀 Why call Cannot Be Used in setTimeout, But bind Can
Since call executes immediately, it doesn’t work in setTimeout.
But bind returns a new function that can be called later.

❌ call doesn’t work in setTimeout

const obj = { name: "Akshat" };

function greet() {
    console.log(`Hello, ${this.name}`);
}

// Call executes immediately, so it doesn't work as expected
setTimeout(greet.call(obj), 1000); // ❌ Wrong! Executes immediately

✅ bind works in setTimeout

const obj = { name: "Akshat" };

function greet() {
    console.log(`Hello, ${this.name}`);
}

// Bind returns a function, so it works correctly
setTimeout(greet.bind(obj), 1000); // ✅ Works! Output after 1 sec: Hello, Akshat
🌟 Summary
Feature	                        call	            bind
Executes immediately?	        ✅ Yes	        ❌ No
Returns a new function?	        ❌ No	        ✅ Yes
Can be used in setTimeout?	    ❌ No	        ✅ Yes
Modifies this permanently?	    ❌ No	        ✅ Yes

✔ Use call when you want to execute immediately.
✔ Use bind when you need a new function with this permanently bound (e.g., in setTimeout).
*/


console.log("HI")
setTimeout(()=>{console.log('After 0 sec')},0)
Promise.resolve().then(()=>{console.log("Promise Resolve Hogya")});
setTimeout(()=>{console.log('After 0 sec')},0)
console.log("Bye")
/*Output:
HI
Bye
Promise Resolve Hogya
After 0 sec
After 0 sec
Hello Akash
*/
/*
This is because their are total 2 queues:
i) Microtask Queue (High Priority)
ii) Callback Queue/ Task Queue

All promises are handled by Microtask queue which has higher priority , hence they are resolved first.
// Diagram in old js copy.
*/

/* ++++++++++++++++ Very Important Js Interview Question ++++++++++++++++++++++++++
What is Starvation in Js?

There are two types of task queues in javascript.

Callback Task queue(MTQ)
Micro Task queue(CTQ)

The Callback Queue, also known as the Task Queue, is where asynchronous tasks such as event handlers,
setTimeout callbacks, and I/O operations are queued for execution. These tasks are typically non-promise related.

The Micro Task Queue is a special queue that holds micro-tasks, 
which are small, short-lived tasks. Promises, mutation observations, and other similar asynchronous 
operations enqueue their callbacks into the Micro Task Queue.


Priority and Execution Order:
When the event loop runs, it first processes tasks from the Micro Task Queue before moving on to tasks in the 
Callback Queue.

This means that micro-tasks, like promises and mutation observations, are given priority over regular callback tasks. 
Even if both queues have tasks waiting, the event loop will always finish processing all micro-tasks before 
it starts working on tasks from the Callback Queue.

Understanding Task Starvation:

Now, imagine this: if micro tasks keep popping up without allowing other tasks a chance to run, 
what happens next? Well, in this scenario, the Callback Queue won’t get an opportunity to execute its tasks. 
This situation is what we call the starvation of tasks in the Callback Queue.

It occurs when your promises have inside promises:
Promise.resolve().then(()=>{
        console.log("Promise Resolve Hogya");
        Promise.resolve().then(()=>{
            console.log("Promise Resolve Hogya");
            Promise.resolve().then(()=>{
                console.log("Promise Resolve Hogya")
                Promise....(Infinite Times) (As one promise ressolve , it puts another promise in MicroTask Queue)
                                            (Hence Task queue will never execute)
            });
        });
    });
Javascript visualizer is a website that can show you it dry run , just copy paste it their to visualize it.
*/