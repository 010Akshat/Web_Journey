const myNumbers = [1,2,3,4,5,6,7,8,9,10]

let newNums = myNumbers.map((num)=>{return num + 10})
console.log(newNums)
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]
newNums = myNumbers.map((num)=>{return num >4})
console.log(newNums)
// [
//     false, false, false,
//     false, true,  true,
//     true,  true,  true,
//     true
// ] 
// Remember map is not like filter, it will return for every item


//---------------------------------------- Chaining is possible-------------------------------

newNums = myNumbers
            .map((num)=>num * 10)
            .map((num)=> num+1) // here value num is updated
            .filter((num)=> num>=40)

console.log(newNums)
// [
//     41, 51,  61, 71,
//     81, 91, 101
// ]

