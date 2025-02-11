/* On Basis of how data is stored and how data is accessed , data types 
are categorized into primitive and non-primitive*/

//Primitive
// They are call by value whenever you share them , their copy is shared and changes are made in copy
/* 7 types:String,Number,Boolean,null,undefined,Symbol(generaly used in react to make button unique or value unique),
BigInt(Large Values) */
const score=100
const scorevalue=100.3//(nothing like int or float in js , its just Number)
const isLoggedIn = false
const outsideTemp=null
let userEmail = undefined  // or we can use  let userEmail;

const id=Symbol('123') // return type is symbol
const anotherId=Symbol('123') 
console.log(id==anotherId)// false , Symbol is just used to make value doesnt matter if you give same value

const bigNumber=81209312n// now it becomes bigint by using n at last

//JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

// Reference (Non- Primitive)
// They are call by reference whenever you share them , their memory location is shared
// Arrays, Objects, Functions

const heros=["Shaktiman","naagraj","doga"] // Arrays
let myObj ={
    name:"hitesh",
    age:22
} // Inside Curly Braces these is object

const myFunction = function(){
    console.log("Hello World")
}

let marks=100
// Now we never told JS that score is number type or boolean type etc
// Hence JS is dynamically typed language
/*JavaScript is a dynamically typed language,
 which means that data types of variables are determined
  by the value they hold at runtime and can change 
  throughout the program as we assign different values to them. */

console.log(typeof bigNumber)// bigint 
console.log(typeof userEmail)// undefined
console.log(typeof outsideTemp) // object
console.log(typeof scorevalue)//number
console.log(typeof isLoggedIn)// boolean
console.log(typeof id)//symbol
console.log(typeof heros)//object
console.log(typeof myObj)//object
console.log(typeof myFunction)//function (actually it is function object   Above three are object just this is called function object)

//-----------------------------------------------------------------------------------------------------//

// Understanding Memory

// Stack (it is a memory used by primitive data types) // Whenever stack memory is used , you get a copy of declared variable
// Heap(it is used by reference data types) // Whenever heap is used , you get reference of original value, so change will occur in original value 

let myYoutubeName="hiteshchoudharydotcom"

let anothername=myYoutubeName
anothername="chaiaurcode"

console.log(myYoutubeName)// hiteshchoudharydotcom
console.log(anothername)//chaiaurcode

let userOne ={
    email:"user@google.com",
    upi :"user@ybl"
}
let userTwo=userOne
userTwo.email="hitesh@google.com"
console.log(userOne.email)//hitesh@google.com
console.log(userTwo.email)//hitesh@google.com


