function sayMyName(){ // function keyword , sayMyName is name of function and rest syntax
    console.log("A")
    console.log("J")
}
sayMyName// it is only reference , when you run it no output will be generated
sayMyName() // A [next line] J // adding () means execution that function will be executed 


function addTwoNumbers(number1,number2){// here number1 and number2 are parameters 
    console.log(number1+number2)
}
const result=addTwoNumbers(3,4) // 7 // 3,4 are arguments , when function is called 
console.log(result) // undefined //as function did not return anything

function addTwoNumbers1(number1,number2){
    return (number1+number2)
}
const result1=addTwoNumbers1(3,4)
console.log(result1)//7

//---------------------------------------------------------------------------------------------------------
function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("akshat")) //akshat just logged in
//--------------------------------Interview ques, when you dont pass any argument --------------------
console.log(loginUserMessage())//undefined  just logged in// so answer will be undefined logged in not any error

// you can give default value to function
function loginUserMessage1(username="DefaultName"){
    return `${username} just logged in`
}

console.log(loginUserMessage1()) //DefaultName just logged in

function loginUserMessage2(username){
    if(!username){
        console.log("Please enter username ")
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage2())// Please Enter UserName  [nextline] undefined

//----------------------------------------------------------------------
//  ... is used for both spread and rest operator 
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500))//[ 200, 400, 500 ] // array
function calculateCartPrice1(val1,val2,...num1){
    return num1
}
// -----------------Interview Question------------------------------------------------------------------------
console.log(calculateCartPrice1(200,400,500,2000))//[ 500 ,20000 ] // as val1=200,val2=400 and rest values are in array because of rest function.

//------------------------------------------------------------------------------------------------
const user = {
    name:"Sam",
    price:"999"
}

function handleObject(anyobject){
    console.log(`UserName is ${anyobject.username} and price is ${anyobject.price}`)// UserName is undefined and price is 999 // name of property should be same, thats why when we fetch data using API we check for presence by using if else condition..
}
handleObject(user)
handleObject({
    username:"aj",
    price:"100000"
})//UserName is aj and price is 100000

//-------------------------------------------------------------------
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
       console.log(getArray[1])
}

returnSecondValue(myNewArray)//400
returnSecondValue([10,20,30])//20
