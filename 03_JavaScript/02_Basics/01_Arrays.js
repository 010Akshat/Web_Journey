// Primitive Data Types : string, Number, boolean, null, defined, Symbol, Big Int;
// Non-Primitive Data Types : Array Object Functions;

// ARRAYS

const myArray=[0,1,2,3,4,5]
const myArray1=[0,1,2,3,4,5,true,"akshat"]// It can contain any type of elements
// Documentation For Arrays 
/*
1.JavaScript arrays are resizable and can contain a mix of different data types.
2.JavaScript arrays are not associative arrays and so, array elements cannot be accessed using 
arbitrary strings as indexes, 
but must be accessed using nonnegative integers..
i.e you can acces myArray[1] but not in this way myArray["one"]
3.JavaScript arrays are zero-indexed
    ----------------- INTERVIEW CONCEPT---------------------------
4.JavaScript array-copy operations create shallow copies(Same reference point i.e heap concept). 
(All standard built-in copy operations with any JavaScript objects create shallow copies,
rather than deep copies(Different reference point i.e stack concept)).
*/

// Array has Property Length as well as prototypes
const heroes=["Shaktimaan","IronMan","Thor"]

const myArr2= new Array(1,2,3,4)// In this way parenthesis are given rather than square brackets
console.log(myArr2.length)

// ARRAYS METHODS
myArray.push(6)
myArray.push(6)

console.log(myArray)//[0,1,2,3,4,5,6,6]
console.log(typeof myArray) // object

myArray.pop()

console.log(myArray)//[0,1,2,3,4,5,6]

myArray.unshift(9) // It push element at 0 index and shift remaining all.. But its a time consuming process
console.log(myArray)//[9,0,1,2,3,4,5,6]

myArray.shift()// It pop element at 0 index and shift remaining all.. But its a time consuming process
console.log(myArray)//[0,1,2,3,4,5,6]

console.log(myArray.includes(9)) // false
console.log(myArray.indexOf(9)) // -1 i.e does not exit
console.log(myArray.indexOf(3)) // 3


const newArr=myArray.join('')//const newArr=myArray.join()  then output will be "string and value is 0,1,2,3,4,5,6"
console.log(myArray) // [0,1,2,3,4,5,6]
console.log(`${typeof myArray} and value is ${myArray}`) // object and value is 0,1,2,3,4,5
console.log(`${typeof newArr} and value is ${newArr}`) // string and value is 0123456

// Slice Splice

console.log("A ",myArray)   //  [0,1,2,3,4,5,6]

const myn1 = myArray.slice(1,3) // 3 is index here
console.log(myn1)         // [1,2]
console.log("B ",myArray)  //  [0,1,2,3,4,5,6]

const myn2 = myArray.splice(4,3) //  3 is length here
console.log(myn2)         //[4,5,6]
console.log("C ",myArray)   //  [0,1,2,3]

/* ----------------------------IMP Inteview Question-------------------
Question- Diffrence Between Slice And Splice
Ans- Everyone Says That slice does not include last index but splice include...
  BUT>>>>>  It is not correct answer..
  slice just make a copy and give to newarray but splice remove the specified content from original array.
  i.e splice manipulate the original array but slice does not.
*/

/* More About Splice
Splice is very important!!!!

YOU CAN INSERT ELEMENTS USING SPLICE

:: At a Given Position
To insert an element at a specific index, the splice() method can be used.
This method allows adding elements at any position in the array while optionally removing existing ones.

let a = [10, 20, 30, 40];
let pos = 2;
let e = 50;
a.splice(pos, 0, e);
console.log(a);

Output
[ 10, 20, 50, 30, 40 ]


:: Multiple Elements
Using the splice() method, you can also insert multiple elements at a specified index.

let a = [10, 20, 30, 40];
let pos = 2;
let e1 = 50, e2 = 60;
a.splice(pos, 0, e1, e2);
console.log(a);

Output
[ 10, 20, 50, 60, 30, 40 ]
 
*/