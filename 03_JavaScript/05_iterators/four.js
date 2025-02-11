const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:"swift by apple"
}
// for in loop can be used to iterate through objects
// its not that , for in loop can be used only for objects, it can be used for iteration for other things also

for (const key in myObject){ // Syntax for forin
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

// array with for in loop
const programming =["js","rb","py","java","cpp"]

for (const key in programming){
    console.log(key)
}
// 0
// 1
// 2
// 3
// 4

// As we know arrays are also objects
// Arrays are having keys which we call as index 
// According to the documentation, objects were designed because arrays have default key that are numbers,
//but in objects we can use our own keys


for (const key in programming){
    console.log(programming[key])
}
// js
// rb
// py
// java
// cpp
// This is diff in for of and for in loop in js....
// in for of , when we were writing i in loop we were getting values but here we are getting keys 
// to clearly see difference lets run for of loop here again
for (const key of programming){
    console.log(key)
}
// js
// rb
// py
// java
// cpp
//-------------------------------------------------------------------------
// const map = new Map()
// map.set('IN',"INDIA")
// map.set('USA',"United States Of America")
// map.set('Fr',"France")
// map.set('IND',"INDIA")
// for (const key in programming){
//     console.log(programming[key])
// }
// Not give error but nothing will be printed ,
// maps are not iterable in such way 

//-----------------------------------------------------------------------------

