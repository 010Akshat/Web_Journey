// truthy and falsy values

const useremail="h@email.ai"

if(useremail){
    console.log("Got User Email")
}else{
    console.log("Dont have user email")
}// Got User Email // string with some value is considered as truth but "" i.e 
// empty string is considered as false
// [] empty array is considered as true 
 

//---------------------falsy Values--------------------
//  false , 0 , -0 , 0n (BigInt) , "" , null , undefined, NaN

//---------------------truthy values--------------------
//   "0" (0 inside ""), 'false' (single quotes) , " " (space in ""), 
//[] (empty array) , {} (empty braces) , function(){}  (empty function)



//-------------------------------------------------------------------------------
// Hence to check if,
// array is empty
const arr =[]
if(arr.length==0){
    console.log("Array is empty")
}// array is empty

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}// Object is empty

//+++++++++++*************  VERY UNIQUE *****************+++++++++++++++++
// false == 0 // true
//false == "" // true
//false == '' // true
//0 == '' // true
//0 == "" // true

if(false==0 && false == "" && false == '' && 0==''  && 0==""){
    console.log("All Are True")
}// All Are True

//Nullish Coalescing Operator (??): null undefined
// It is generally used when DB is connected & we dont have idea of input

let val1 = 5 ?? 10
console.log(val1)//5
let val2 = null ?? 10
console.log(val2)//10
let val3 = undefined ?? null ?? 10
console.log(val3)//10


// Terniary Operator 
// same as C/C++ // condition : true / false 
const iceTeaPrice = 100
iceTeaPrice >=80 ?console.log("Price greater than 80") :console.log("Price greater than 80")

/*
1. Single Question Mark (?)
    Usage : Optional Chaining (?.)
    Used to safely access properties of objects that might be null or undefined.
    If the value before ?. is null or undefined, it stops execution and returns undefined instead of throwing an error.

    Example:
    let user = null;
    console.log(user?.name); // Output: undefined (doesn't throw an error)

    let person = { name: "Akshat", address: { city: "Jaipur" } };
    console.log(person?.address?.city); // Output: Jaipur
    console.log(person?.contact?.phone); // Output: undefined (instead of error)

2. Double Question Marks (??)
    Nullish Coalescing Operator (??)
    Provides a default value only if the left-hand side is null or undefined.
    Unlike ||, it does not consider other falsy values (0, "", false, NaN) as nullish.
    Example:

    let name = null;
    console.log(name ?? "Default Name"); // Output: "Default Name"

    let count = 0;
    console.log(count ?? 10); // Output: 0;
*/