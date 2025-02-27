const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros)//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// It will  take dc_heros array as another 4th element
// other point is , it will push in same array

const all_heros=marvel_heros.concat(dc_heros)
console.log(marvel_heros)//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(all_heros)//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman'],'superman','flash','batman']

// Points of Difference
/* 1. Push just one more element of any datatype but concat add other element of arrays individually
   2. Push add element to original array but concat returns new Array
*/

// Another Method for concatenation - SPREAD METHOD
// It is more used and elements of more than two arrays can be added in a single line

const all_new_heros = [...marvel_heros,...dc_heros];
console.log(all_new_heros)//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman'],'superman','flash','batman']

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)// In place of infinity it can 2 or 3 according to requirement of depth
console.log(real_another_array)  //[1,2,3,4,5,6,7,6,7,4,5]


// To check aur to convert in arrays
console.log(Array.isArray("akshat"))//false
console.log(Array.from("akshat"))//[a,k,s,h,a,t]
console.log(Array.from({name:"akshat"}))//[] //(Interview) Given input is object.. compiler is not able to convert into array so it will return empty array


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))//[100,200,300]
// console.log(Array.from(score1,score2,score3))//It will give error

// from- Used for An iterable object to convert to an array.
// of- a set of elements into new array object

//++++++++++++++++++++++   ARRAY DESTRUCTURING ++++++++++++++++++++++++++++++=
const chaiTypes=["chai1","chai2","chai3","chai4","chai5"]
const [firstChai,secondChai]=chaiTypes
console.log(firstChai);
console.log(secondChai);

/*Note:- In Array destructuring name of variable can be anything but in object destructuring
variable name should be exactly same as key */


// +++++++++++++++++++++++++++++ ARRAY BUILT IN SORT METHOD+++++++++++++++++++++++++++++++++++++++++++++
/*
The sort() method of Array instances sorts the elements of an array in place and
returns the reference to the same array, now sorted. 
The default sort order is ascending, built upon converting the elements into strings, 
then comparing their sequences of UTF-16 code unit values.
The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
To sort the elements in an array without mutating the original array, use toSorted().

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4] // Yes 100000 will come before 21 as they are converted to string.

*/

// To Sort According to our condition we need to use own comparator.
//  Generally this is only used. 
const numberArray = [40, 1, 5, 200];
numberArray.sort((a,b)=> a-b);
console.log(numberArray) //[ 1, 5, 40, 200 ]
numberArray.sort((a,b)=> b-a)
console.log(numberArray) //[ 200, 40, 5, 1 ]

// The sort() method sorts elements of the array in-place (modifies the original array).
// It takes a comparison function (a, b) => a.value - b.value to determine the sorting order.
// How the Comparison Function Works
// If a.value - b.value is negative, a is placed before b (ascending order).
// If a.value - b.value is positive, b is placed before a.
// If the result is 0, their order remains unchanged.

// Hence , for desc order :  sort((a,b)=> b-a)

/*

So to sort an object items :
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];
items.sort((a, b) => a.value - b.value);

*/

/* Reference Concept

// sort() returns the reference to the same array

const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10

In case you want sort() to not mutate the original array and new shallow copy is create:
We can use : i) spread Operator ii) toSorted Method


// Spread Operator
const numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 3

// The toSorted() method is a newer addition to JavaScript (introduced in ES2023). 
It works like sort(), but instead of modifying the original array, it returns a new sorted array.

const numbers = [3, 1, 4, 1, 5];

const sortedNumbers = numbers.toSorted((a, b) => a - b);

console.log("Original Array:", numbers); // [3, 1, 4, 1, 5]
console.log("Sorted Array:", sortedNumbers); // [1, 1, 3, 4, 5]

*/

/*
DOUBT:  ... spread operator also creates shallow copy and array is created in heap memory then why
creating shallow does not impacting in original array

1. Understanding Shallow Copy vs. Deep Copy
A shallow copy means that only the top-level elements of an array or object are copied. 
If these elements are primitive values (like numbers, strings, booleans), 
the new array gets a separate copy of them.

However, if the array contains references (like objects or other arrays), the copied array will
still point to the same objects in memory.

2. Why Does numbers.slice() or [...numbers] Prevent Modification of numbers?

const numbers = [3, 1, 4, 1, 5];
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;

console.log(numbers[0]); // 3
console.log(sorted[0]);  // 10
Here’s what happens:

[...numbers] creates a new array, but it only copies the primitive values (3, 1, 4, 1, 5).
Since numbers only contains primitive values, the copy is fully independent of the original.
When we modify sorted[0] = 10;, it does not affect numbers, because sorted contains its own separate 
primitive values.


3. What If the Array Contained Objects?
Let's test with objects instead of primitives:

const arr = [{ x: 1 }, { x: 2 }, { x: 3 }];
const copiedArr = [...arr]; // Shallow copy

copiedArr[0].x = 100; 

console.log(arr[0].x); // 100 (Original array is modified!)
console.log(copiedArr[0].x); // 100 (Both point to the same object)

✅ Why did modifying copiedArr affect arr?

Because objects are stored as references in memory.
The [...arr] spread operator only copies the references, not the actual objects.
So both arr[0] and copiedArr[0] point to the same object in heap memory.

*/
