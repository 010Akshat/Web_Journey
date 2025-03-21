const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach((item)=>{
    return item;
})

console.log(values) // undefined , hence forEach cannot return anything


const myNums =[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.filter((num)=>num>4)
console.log(newNums) // [ 5, 6, 7, 8, 9, 10 ]

const newNums1=myNums.filter((num)=>{ 
    num>4
})
console.log(newNums1)//[]  
// Because whenever you use {} in arrow function(in other , you open a scope) you have to use return keyword
// But, one thing in clear in any case filter will return a array , either empty but returns a array.
// sharam karle ki terko yaad nhi raha 
// arrow.js me arrow function wala content revise karke aa, sab clear hojayega 
 //-------------------------BUT------------------------------
 const newNums2=myNums.filter((num)=>{ 
    return num>4
})
console.log(newNums2) // [ 5, 6, 7, 8, 9, 10 ]


//----------------------------------Using forEach Loop-----------------------------------------
const newNums3 = []
myNums.forEach((num)=>{
    if(num>4){
        newNums3.push(num);
    }
})
console.log(newNums3) //[ 5, 6, 7, 8, 9, 10 ]

//------------------------------------Exercise Through Filter------------------------------------------
const books =[
    {title:'Book One',genre:'Fiction',publish:1981,edition:2004},
    {title:'Book Two',genre:'Non-Fiction',publish:1992,edition:2008},
    {title:'Book Three',genre:'History',publish:1999,edition:2007},
    {title:'Book Four',genre:'Non-Fiction',publish:1989,edition:2010},
    {title:'Book Five',genre:'Science',publish:2009,edition:2014},
    {title:'Book Six',genre:'Fiction',publish:1987,edition:2010},
    {title:'Book Seven',genre:'History',publish:1986,edition:1996},
    {title:'Book Eight',genre:'Science',publish:2011,edition:2016},
    {title:'Book Nine',genre:'Non-Fiction',publish:1981,edition:1989}
]

let userBooks = books.filter((bk) => bk.genre ==='History')

console.log(userBooks); 
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Seven',
//       genre: 'History',
//       publish: 1986,
//       edition: 1996
//     }
//   ]

userBooks = books.filter((bk)=>{return bk.publish>2000})// use return with {}, again arrow wala concept in arrow.js
console.log(userBooks)
// [
//     {
//       title: 'Book Five',
//       genre: 'Science',
//       publish: 2009,
//       edition: 2014
//     },
//     {
//       title: 'Book Eight',
//       genre: 'Science',
//       publish: 2011,
//       edition: 2016
//     }
//   ]
userBooks = books.filter((bk)=>( bk.publish>1995 && bk.genre==="History"))// use return with {}, again arrow wala concept in arrow.js
console.log(userBooks)
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     }
//   ]

