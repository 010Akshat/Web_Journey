//---------------------------OBJECTS-------------------
/*
1. Their are two ways to declare object, a) literals b) contructors.
2. SINGLETON :- Whenever you create a object through constructor a singleton created
i.e it is a single object of its own type.
BUT when you create object through literal then it can multiple instances.

3.When you declare objects as literals , SINGLETON is not created. 
4.Their is no as such diffrence in performance, only difference is in SINGLETON concept.
*/



//Object Constructors
Object.create // Way of creating constructor or singleton object



//Object Literals

const mySym= Symbol("akshat") //this line is used in object literal , don't confuse it with contructor or literal.

// Literal
const JsUsers = {
    name:"Hitesh",    // here name is by default string.
    "fullname":"hitesh choudhary",
    [mySym]:"jain", // syntax for symbol
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUsers.email)//hitesh@google.com
console.log(JsUsers["email"])//hitesh@google.com  // Square Bracket Notation
// why do we need two ways
// Because to access "full name" their is only one way i.e second one
console.log(JsUsers["fullname"])

//-------Symbol concept here.. Imp for INTERVIEW-----------------
console.log(JsUsers.mySym) // mykey1 // when inside object mySym:"mykey1" was used 
console.log(typeof JsUsers.mySym) // string //It is not showing Symbol because of wrong syntax

/* It is asked in interview that take a symbol and add it in a keys of object and print it..
Most of give wrong answer mentioned above and thats why it is showing type as string 
So CORRECT METHOD is below 
*/

/*Inside always declare as [mySym]:"mykey1" not as mySym:"mykey1"*/
console.log(typeof JsUsers[mySym])  // DOUBT - Hitesh Choudhary said it is correct syntax but it also giving output as string.
// I did chatGPT and typeof JsUsers[mySym] id giving type of value (in key value) i.e string 
// to get answer as symbol write in object [mySym]:mySym or direct console.log(typeof mySym)
// However Syntax for symbol to used in object is perfectly right.
console.log(JsUsers[mySym])//jain



JsUsers.greeting = function(){
    console.log("Hello Js User")
}
console.log(JsUsers.greeting)// [Function (anonymous)] // Function is not executed , just we got reference of function // This point will be helpfull in future
console.log(JsUsers.greeting()) /* Hello JsUser   [in next line]   undefined    // we will also get undefined as output which we will discuss later */
JsUsers.greetingTwo = function(){
    console.log(`Hello Js User,${this.fullname}`)
}
// 'this' is used when you have to reference same obejct and its properties
console.log(JsUsers.greetingTwo()) //Hello Js User,hitesh choudhary   [in next line]    undefined    // we will also get undefined as output which we will discuss later */

/* Final Note:
Generally , we access elements from JsUsers.name 
but some special cases are their where we can only use JsUsers["name"] which are asked in interviews .
We already discussed them above */















// To alter value in object
JsUsers.email="hitesh@chatgpt.com"
console.log(JsUsers.email) //hitesh@chatgpt.com

// To  fix the values inside object
Object.freeze(JsUsers) // Now you cant change the value 
JsUsers.email="hitesh@microsoft.com"
console.log(JsUsers.email) //hitesh@chatgpt.com // As now value cant be changed

