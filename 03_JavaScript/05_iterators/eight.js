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