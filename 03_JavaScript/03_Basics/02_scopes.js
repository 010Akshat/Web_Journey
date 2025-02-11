// {}  // These curly braces indicate scope of function or if else condition .. obejct curly braces are different.. vaise feel agyi hai 
// var ke sath dikkat ye hi thi ki vo scope ke hisaab se nhi chalta tha , iss vajah se sab let ko use karte hai
var c=300
if(true){
    let a =10
    const b=20
    c=30
}
// console.log(a)// error because a has scope inside if
// console.log(b)// error because b has scope inside if
console.log(c) //30 
// Now it is a problem because c was initialised by some user as 300 and in some other file c=30.. this problem is created because var doesnt take care of scopes.. 
// Thats why let is used instead of var in JS
 // inside {} is is called block scope and outside it is global scope 
 // variable declared in global scope can be used can be used inside block scope but not vice versa
let v =300
if(true){
    let v=20
    console.log(v)//20 // block scope
}
console.log(v)// 300 // global scope

// ----------------------------------Very Important Point w.r.t Interview--------------------------
/* Your global scope here in node ennvironment is different from global scope in developers console in google .
It will discussed later using keyword . Till then rememeber the point */




function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username) // hitesh// it can acccess of variables of outside level function one()
    }
    // console.log(website) // error // only inner level have access of outerlevel variables , website is inner level variable in function two
    two()
}
one()
// all these function calls have call stack which will be discussed later through diagrams 

//------------------------Same Concept Applies for if else -----------------------------------------
if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website ="youtube"
        console.log(username+website) // hitesh youtube
    }
 // console.log(website)// error 
}

// console.log(username) // error

//+++++++++++++++++++++++++++++++++++++++ INTERESTING AND IMPORTANT++++++++++++++++++++++++++++++++++++++++++++++++
// their are two ways of creating a function
function addone(num){
    return num+1
}

console.log(addone(5))// 6

const addtwo=function(num){
    return num+2
}
console.log(addtwo(7)) // 9

//+++++++++++++++++++++++++++++ BUT ++++++++++++++++++++++++++++++++++

console.log(addthree(5))// 8
function addthree(num){
    return num+3
}


// console.log(addfour(7)) // error Cannot access 'addfour' before initialization
const addfour=function(num){
    return num+4
}
// the point to be noted here is when you call function before initialization it worked in first method but will give error in second method 
// This is somehow related to hoisting which will be discussed later 

