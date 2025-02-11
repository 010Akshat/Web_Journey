const user = {
    username:"hitesh",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`) // Now whenever you want to refer current context, you need to use 'this' keyword
        // so, to access variables of this block scope you will use 'this' keyword 
        console.log(this)
    }

}
user.welcomeMessage()
//OUTPUT:-
//hitesh ,welcome to website
//{
//    username: 'hitesh',
//    price: 99,
//    welcomeMessage: [Function: welcomeMessage]
//  }
user.username="sam"
user.welcomeMessage()
//OUTPUT
//sam ,welcome to website
// {
//     username: 'sam',
//     price: 99,
//     welcomeMessage: [Function: welcomeMessage]
//   } 
// It is clear that this is used to refer current context;

//----------------------------IMPORTANT FOR INTERVIEW-----------------------------------
console.log(this)// {} // It will give empty object because we are inside node environment

// But if I run this on developer console on google output will be windows.
/* In Initial Days there was single way to excute JS i.e inside browser. The engine required to execute JS was found inside 
browser only . 
But Later that engine came out of brower with various names such as node, deno etc
So now when engine runs inside browser we get GLOBAL OBJECT as WINDOWS thats why when we write console.log(this) in
developer console in browser we get ans as WINDOWS..... very imp for interview 
but here in node we get GLOBAL object as  {} */



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function chai1(){
    let username = "akshat"
    console.log(this.username) // undefined
    // console.log(this) // Quite Large Output that that have some data
}
chai1()
// Conclusively 'this' is not working inside function()

const chai2 = function(){
    let username = "akshat"
    console.log(this.username) // undefined
    // console.log(this) // Quite Large Output that that have some data
}
chai2()
// We will get same result in both ways

const chai3 = () =>{ // just remove function keyword and use this => arrow and your arrow function is ready
    let username="hitesh"
    console.log(this)//{} // not that large output
    console.log(this.username)//undefined
}
chai3()
// Imp for interview
// so far difference in normal and arrow function is console.log(this) in arrow is giving {}.. It will be discussed later by sir 


//-----------------------Discussion on Only Arrow Function--------------------------------------
const addTwo = (num1,num2)=>{
    return num1+num2  // Explicit Return 
}
console.log(addTwo(3,4))// 7

const addTwo1 = (num1,num2)=>  num1+num2  // Implicit Return // when you have single line you can use this 
console.log(addTwo1(3,4))// 7

const addTwo2 = (num1,num2)=>  (num1+num2)  // Implicit Return // when you have single line you can use this 
console.log(addTwo2(3,4))// 7

// whenever you use curly braces {} you will have to use 'return' keyword

// Now , if you have to return object then
const addTwo3 = (num1,num2)=> ({username:"hitesh"}) // here {} refering to object parenthesis , so don't confuse  
console.log(addTwo3(3,4))// { username: 'hitesh' }

