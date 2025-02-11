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

