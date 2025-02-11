"use Strict" // treat all JS Code in newer version

// alert(3+3) // we are using nodejs .. in html file and in developer console it will pop up a box but their is different syntax in node
console.log(3+3); console.log(3+3); // readabilty reduced
// instead use separate lines and you donot require ; then

let name="akshat"
let age=21
let isLoggedIn=false
let data=null; // Space hai par khaali hai , taaki value update kar sake.
let anotherVariable;
console.log(data);
console.log(anotherVariable);//undefined  // khaali bhi nhi hai , "baadme dekhenge" isse yaad rakh sakte hai.

// DataTypes
//number => 2 to power53
// big int
//string =>""  '' `` // prefer=>""
// boolean => true / false
// null =>standalone value
// undefined => no value or datatype is defined // let account; is undefined
// symbol => unique (will be used in react)
console.log(typeof name) // string
console.log(typeof age) // number
console.log(typeof isLoggedIn)// boolean
console.log(typeof undefined) // undefined
console.log(typeof null) // object .. (it is said as drawback of language)
 