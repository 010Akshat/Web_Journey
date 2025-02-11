// for of 
// ["","",""] // Strings inside array
//[{},{},{}] // Objects inside array 
// Both are commonly used in array

const arr=[1,2,3,4,5]

// for (const iterator of object){

// } 
/* here itertor is i which we use for looping .. object is the thing on which we will apply loop ,it can int,string object etc
dont get it confused with object of jS */
for (const num of arr){ // syntax of for of loop
    console.log(num);
}
// 1
// 2
// 3
// 4
// 5

const greetings ="Hello World!"
for(const greet of greetings){
    console.log(`Each Char is ${greet}`)
}
// Each Char is H
// Each Char is e
// Each Char is l
// Each Char is l
// Each Char is o
// Each Char is  
// Each Char is W
// Each Char is o
// Each Char is r
// Each Char is l
// Each Char is d
// Each Char is !


// Maps
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United States Of America")
map.set('Fr',"France")
map.set('IND',"INDIA")

console.log(map)
// {
//     'IN' => 'INDIA',
//     'USA' => 'United States Of America',
//     'Fr' => 'France',
//     'INd' => 'INDIA' 
//   }

//The Map object holds key-value pairs and remembers the original insertion order of the keys.
//Any value (both objects and primitive values) may be used as either a key or a value.
// A key in the Map may only occur once; it is unique in the Map's collection.i.e it stores unique keys// Values can be same 

for (const key of map){
    console.log(key)
}
// [ 'IN', 'INDIA' ]
// [ 'USA', 'United States Of America' ]
// [ 'Fr', 'France' ]
// [ 'INd', 'INDIA' ]
// This will print whole arrray in once along with keys.
// so to distribute content of map . we have different syntax.//IMPORTANT

for (const [i/*key*/] of map){
    console.log(i)
}
// IN
// USA
// Fr
// IND
for (const [,j/*value*/] of map){
    console.log(j)
}
// INDIA
// United States Of America
// France
// INDIA
for (const [i,j/*key,value*/] of map){
    console.log(`${i} :- ${j}`)
}
// IN :- INDIA
// USA :- United States Of America
// Fr :- France
// IND :- INDIA

const myObject ={
    'game1':'NFS',
    'game2':'Spiderman'
}

// for (const [i,j/*key,value*/] of myObject){
//     console.log(`${i} :- ${j}`)
// }

// ERROR 
// myObject is not iterable
// forof doesn't iterarte objects.
// objects can be iterarted in another ways but this is not correct way
