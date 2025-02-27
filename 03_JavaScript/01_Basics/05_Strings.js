const name="hitesh"
const repoCount = 50

console.log(name + repoCount + " Value") // And it is only used for string concatenation
// else if you cant concatenate (variable can be any function or anything else too)( use ,);
console.log(name,repoCount,"Value") // hitesh 50 Value
// This way writing is old fashioned and not recommended now

// String Interpolation
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`) // `` -> template literals
// This is the modern way and more preferred nowadays

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);// h
console.log(gameName.__proto__)// {}  // It will give {} as output but it is not empty. 

console.log(gameName.length) // Length is property not method so we dont use ()
// To access methods/functions
console.log(gameName.toUpperCase())// HITESHHC// toUpperCase,toLowerCase are methods so we will use ()
console.log(gameName.charAt(2))//t

const newString=gameName.substring(0,4) // subString is also a method
const newString1=gameName.substring(-8,4) // subString is also a method
console.log(newString)//hite
console.log(newString1)//hite // It will ignore negative value and start form 0

const anotherString=gameName.slice(-8,4)
console.log(anotherString)// ite // consider last letter as -1 and move towards left to get -8 and then move forward to get 4(excluding) 
// Not giving any answer

console.log(gameName.slice(0,3)); // hit
const newStringOne ="   akshat    "
console.log(newStringOne)//"    akshat    "
console.log(newStringOne.trim())//akshat // trim is a method that remove trailing and leading spaces

const url ="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-')) //https://hitesh.com/hitesh-choudhary

console.log(url.includes('hitesh')) // true

console.log(gameName.split('-'));//[ 'hitesh', 'hc', 'com' ]
console.log(gameName.split('')) /*[
    'h', 'i', 't', 'e',
    's', 'h', '-', 'h',
    'c', '-', 'c', 'o',
    'm'
  ] */

  





