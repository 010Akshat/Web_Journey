const myNums =[1,2,3,4,5,6];

let myTotal = myNums.reduce(function (acc,currval){
    console.log(`acc:${acc} and currval: ${currval}`)
    return acc + currval
},0)
// acc:0 and currval: 1
// acc:1 and currval: 2
// acc:3 and currval: 3
// acc:6 and currval: 4
// acc:10 and currval: 5
// acc:15 and currval: 6  // ,0 is (initial value) for acc(accumulator) and then acc= acc + currval(currentvalue i.e item)

console.log(myTotal); // 21

myTotal = myNums.reduce((acc,currval)=> acc+currval , 0)
console.log(myTotal) // 21

// In case we don't provide initial value 
let myTotal2 = myNums.reduce((acc,currval)=> acc+currval)
console.log("Here I am " + myTotal2) // 21
//------------------------------------------------------------------------
const shoppingCart =[
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "py course",
        price:999
    },
    {
        itemName: "mob dev course",
        price:5999
    },
    {
        itemName: "data science course",
        price:12999
    }
]
let Shopping_total=shoppingCart.reduce((acc,currval)=> acc+currval.price,0) 
console.log(Shopping_total) //22996

// In case we don't provide initial value 
let Shopping_total2=shoppingCart.reduce((acc,currval)=> acc+currval.price) 
console.log(Shopping_total2) // [object Object]999599912999

/* _______________________________ VERY IMPORTANT_________________________________
Hence, it shows that if you don't provide initial Value it doesn't mean it automatically takes 
0 as initial value, in fact it takes the 0th index value of array as initial value and 
starts its iteration from second value 
That's why , in first case output was correct (as expected ) but in later case
it is not possible to add object(0th index object) with integer value ,
that's why we are getting wierd output */

/* Another Imp Example 
Q: Find most active user in provided list
*/
let maxi=0;
let userActivity =[
    {user:"Alice",activityCount:45},
    {user:"Bob",activityCount:72},
    {user:"Charlie",activityCount:33}
]

let res=userActivity.reduce((acc,user)=> Math.max(acc,user.activityCount),0);
console.log(res) // 72
// Anotherv Way
let res2=userActivity.reduce((acc,user)=> {
    return acc.activityCount>user.activityCount?acc:user;
});
console.log(res2); //{ user: 'Bob', activityCount: 72 }

// NOTE: Always remember reduce return the data type which you have created data type of accumulator.

//+++++++++++++++++++++++++++++++++ Very Important Js Concept for INTERVIEW ++++++++++++++++++++++++++++++++
// Function sequential piping or Build your own pipe in JavaScript
// Interviews for stripe, razorPay and Jio Hotstar , this question will definitely come 

// In general "hitesh".toUpperCase().indexOf("H") is called PIPING or CHAINING.  i.e using one method after another
 

const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// Building blocks to use for composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
console.log(multiply6(6)) // 36
console.log(multiply9(9)); // 81
console.log(multiply16(16)); // 256
console.log(multiply24(10)); // 240

//-------------------------------------------Another Imp Example---------------------------------------
// On this same concept we can run promises
// Compare this with pipe: fn(acc) is changed to acc.then(fn),
// and initialValue is ensured to be a promise
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue));

// Building blocks to use for composition
const p1 = async (a) => a * 5;
const p2 = async (a) => a * 2;
// The composed functions can also return non-promises, because the values are
// all eventually wrapped in promises
const f3 = (a) => a * 3;
const p4 = async (a) => a * 4;

asyncPipe(p1, p2, f3, p4)(10).then(console.log); // 1200
