// This is not part of cohort.
/*
. Regular Function inside an Object
Code:
javascript
Copy
Edit
const obj = {
    name: "Akshat",
    greet: function() {
        console.log(this.name); // "Akshat"
    }
};

obj.greet(); // "Akshat"
Explanation:
Here, greet is a method inside the obj object.
The function is defined using the regular function syntax (function()), so it has its own this.
When we call obj.greet(), this refers to obj because it is being called in the context of obj.
So, this.name becomes "Akshat", and "Akshat" is printed.
2. Arrow Function inside an Object
Code:
javascript
Copy
Edit
const obj = {
    name: "Akshat",
    greet: () => {
        console.log(this.name); // undefined
    }
};

obj.greet(); // undefined
Explanation:
Here, greet is an arrow function.
Arrow functions do not have their own this. Instead, they inherit this from their lexical scope (the scope where they are defined).
Since obj.greet() is an arrow function, it does NOT get this from obj. Instead, it inherits this from the outer scope (global scope in this case).
In the global scope, there is no name property, so this.name is undefined.
💡 Key takeaway:
Regular functions take this from how they are called, but arrow functions take this from where they are defined.

3. setTimeout with Regular Function
Code:
javascript
Copy
Edit
const obj = {
    name: "Akshat",
    greet: function() {
        setTimeout(function() {
            console.log(this.name); // undefined
        }, 1000);
    }
};

obj.greet();
Explanation:
greet is a regular function inside obj, so when we call obj.greet(), this inside greet refers to obj.
However, inside setTimeout(function() { ... }), this refers to the global object (window in browsers, global in Node.js).
Since window.name (or global.name) is not defined, console.log(this.name) prints undefined.
💡 Key takeaway:
Regular functions inside setTimeout change this to window or global, not the enclosing object.

4. setTimeout with Arrow Function
Code:
javascript
Copy
Edit
const obj = {
    name: "Akshat",
    greet: function() {
        setTimeout(() => {
            console.log(this.name); // "Akshat"
        }, 1000);
    }
};

obj.greet();
Explanation:
The difference here is that setTimeout is using an arrow function (() => {}) instead of a regular function.
Arrow functions do not have their own this, so they inherit this from the surrounding function (greet in this case).
Since this inside greet refers to obj, and the arrow function inside setTimeout inherits this from greet, this.name correctly refers to "Akshat".
💡 Key takeaway:
Arrow functions inherit this from the surrounding function, so they work correctly inside setTimeout.

*/
// Its not very much clear , but it can be clear in future.