// console.log(2>1)// true
// console.log(2>=1)//true
// console.log(2<1)//false
// console.log(2==1)//false
// console.log(2!=1)//true

// console.log("2">1)// true
// console.log("02">1) // true
// in such type of comparisons result cant be predicted , we should avoid comparing different data types

console.log(null>0) // false
console.log(null==0) // false
console.log(null>=0) // true
// we should avoid comparing different data types
// The reason is that equality check == and comparisons > <  >= <= work differently
// Comparison convert null to a number , treating it as 0.
// That's why null >= 0 is true and null > 0 is false.
// Here language has inconsistency because sometimes it converts null into Nan also.


console.log(undefined==0)// false
console.log(undefined>0)// false
console.log(undefined<0) // false

// Main point to be noted here is that comparison operators  > <  >= <= and ==works differently

// === strict check
console.log("2"===2)//false because strict check or double will also check datatype.
console.log("2"==2)//true because here conversion will occur.

