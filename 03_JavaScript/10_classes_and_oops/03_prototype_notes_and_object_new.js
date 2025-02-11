// JavaScript has a Prototype Behaviour
// Video Thoda High Level Hai 
// Try JArur Karna Samjhne ki , bhot jyada mat ghusna 
// Interview me poocha ja sakta hai

//___________________________WHAT IS PROTOTYPE IN JS? (ChatGPT)____________________________________
// In JavaScript, a prototype is a mechanism that allows objects to inherit properties and methods from other objects. 
// Every JavaScript object has a prototype property, which makes it possible for one object to inherit from another object.

// When you create an object in JavaScript, it is associated with a prototype object. This prototype object is used as a 
// fallback source for properties and methods that are not found directly on the object itself. 
// If a property or method is not found on the object, JavaScript will look for it on the object's prototype, 
// and if it's not found there, it will continue up the prototype chain until it reaches the top-level Object prototype.

// You can think of prototypes as a blueprint or template for objects. When you create a new object using a constructor function 
// or the class keyword, the newly created object inherits properties and methods from its prototype.

// Prototypes are fundamental to JavaScript's object-oriented programming model and are used extensively, 
// especially in constructor functions, inheritance, and prototype-based inheritance patterns.
//__________________________________________________________________________________________________________________

//___________________________________________________________________________________________________________________
/* Go to google page , inspect and go into console.
Write_____
const newHero=['hulk','spiderman']

Then Write______

newHero
(2) ['hulk', 'spiderman']
0: "hulk"
1: "spiderman"
length: 2                                     // This length is property of array newHero 
[[Prototype]]: Array(0)                       // Here ProtoType chaining start (prototypes inside prototype)


-> JavaScript Behaviour is prototypal behaviour.
->What is this prototypal behaviour?
If a property or method is not found on the object you created , JavaScript will look for it on the object's prototype, 
and if it's not found there, it will continue up the prototype chain until it reaches the top-level Object prototype 
or it found the null.  It is referred to as prototyple inheritance.

-> 'New Keyword' , classes , 'this' and prototypal inheritance are all because of prototypes.

Example of prototypal inheritance through code (ChatGPT):

// Parent object constructor
function Person(name, age) {      // functions are objects
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype of Person
Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

// Creating a new object using the Person constructor
var john = new Person("John", 30);

// Calling the method inherited from the prototype
john.sayHello(); // Output: Hello, my name is John

_______________________________________________________________
Due to prototypal inheritance , everything in JS is object because at last prototypal inehritance 
will ultimately end at object prototype.
 
Array -----> Object---->NULL(no further parent)
String -----> Object---->NULL(no further parent)
function -----> Object---->NULL(no further parent)
-->All the properties available to object are also available to array , string or function as it inheritance.
*/
function multiplyBy5(num){
  return num*5;
}

multiplyBy5.power=2; /* we have declared function but we use . access with object , so is function a object?
Ans is YES.....  function is also object and it possible */

console.log(multiplyBy5(5));  // 25
console.log(multiplyBy5.power); // 2 , hence function is object also 
console.log(multiplyBy5.prototype); // {}
// That {} , is by default context of .prototype. {} <-- is 'this' of method.
// In short , properties of prototype and the context is available. 





// Again , at the end of end due to prototypal inheritance everything mets at object prototype, hence function can behave as object.
//Their is no further inheritance over object. It is like end .After it ,Object Prototype is NULL.


//_____________________THIS________________________
function createUser(username,score){
  this.username=username;
  this.score=score;
}
 // function is a object. Object can have its own properties which can hold function . hence we can inject function.

createUser.prototype.increment =  function(){
  this.score++;  // jis matlab this. jisne bhi bulaya hai uska score badha do
}
createUser.prototype.printMe = function(){
  console.log(`score is ${this.score}`)
}
const chai = new createUser('chai',25);  //Interview Important // without 'new' you cannot acces injected functionalities.Previous file problem will also occur i.e file will overwrite without new. 
const tea = new createUser('tea',250);
// chai.increment(); // to access method we dont need to write chai.prototype.increment. also we never did it before. // That is done behind the scene
// console.log(chai.score); 26

chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
