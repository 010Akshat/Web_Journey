const coding = ["js","ruby","java","python","cpp"]

// some loops are directly added inside properties inside arrays 
// when we inspect coding array in developer console, in prototypes of array it will show that foreach is present 
// map is also a prototype of arrays 

coding.forEach(function(item){
// now foreach loop need callback function, so will give it this function, but according to syntax here, we will not give name 
// Since now function is running inside array, inside () it will bring value, you can any name , here its 'item'
   console.log(item);
})
// js
// ruby
// java
// python
// cpp


// We can Use Arrow functions also 
coding.forEach((item)=>{
   console.log(item)
})
// js
// ruby
// java
// python
// cpp
function printMe(item){
   console.log(item);
}
coding.forEach(printMe) // IMPORTANT // we are writing printMe not printMe()i.e. we are giving reference , not executing...
// js
// ruby
// java
// python
// cpp
coding.forEach((i/*value*/,j/*key*/,k/*whole array*/)=>{ // foreach can print more than index
   console.log(i,j,k)
})
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

//------------------------------------------------------------------------------------
// Most Used i.e objects inside array
const myCoding = [
   {
      languageName:"javaScript",
      languageFileName:"js"
   },
   {
      languageName:"java",
      languageFileName:"java"
   },
   {
      languageName:"python",
      languageFileName:"py"
   }
]

myCoding.forEach((item)=>{
   console.log(item.languageName);
})
// javaScript
// java
// python




