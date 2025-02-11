/*

const score = 400
console.log(score) //400

// Another way of initializing a number variable
const balance = new Number(100)
console.log(balance) //[Number: 100]

console.log(balance.toString()) //100
console.log(balance.toString().length)//3
console.log(balance.toFixed(4))//100.0000

const otherNumber = 123.8966

console.log(otherNumber.toFixed(3))//123.897 // it will only consider after the decimal point and round off it after decimal points
console.log(otherNumber.toPrecision(5))//123.90 // it will consider from starting so give value carefully
console.log(otherNumber.toPrecision(2))//1.2e+2 // give input carefully otherwise you'll get in exponential

const hundreds = 1000000
console.log(hundreds.toLocaleString());//1,000,000 // USA standards
console.log(hundreds.toLocaleString('en-IN'));//10,00,000 // Indian Standards

console.log(Number.MAX_VALUE)//1.7976931348623157e+308
console.log(Number.MIN_VALUE)//5e-324
console.log(Number.MAX_SAFE_INTEGER)//9007199254740991
console.log(Number.MIN_SAFE_INTEGER)//-9007199254740991
console.log(BigInt.MAX_VALUE)// undefined

*/
//----------------------------------------------------------------------------------------------
// Math

console.log(Math)//Object [Math] {} // To see all properties to go developer console on google and write same line 
console.log(Math.abs(-4))
console.log(Math.round(4.5))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.1))
console.log(Math.min(4,2,5,7))
console.log(Math.max(4,7,9,2))

console.log(Math.random())// It will always generate a value between 0<=x<=1
console.log((Math.random()*10)+1)
console.log(Math.floor((Math.random()*10))+1)

const max=20
const min=10
// Now we will generarte random numbers between min and max
console.log(Math.floor((Math.random() * (max - min + 1))) + min)

