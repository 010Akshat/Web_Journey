const userLoggedin = true 
if(2=="2"){
    console.log(`executed`)
}// executed
if(2==="2"){
    console.log(`executed`)
}// no output

// <,>,<=,>=,==,!=, ===(it also checks datatype) ,!==
if(2!=="2"){
    console.log(`executed`)
}//executed
if(2!="2"){
    console.log(`executed`)
}// no output


const temperature=40
if(temperature==40){
    console.log(`temp is 40`)
}
else
{
    console.log(`temp is not 40`)
}

//---------------Concept Of Scope---------------------------------
const score=200
if(score>100){
    const user="akshat"
    console.log(`user score, ${user} ${score}`)
}
// console.log(user score, ${user} ${score}) now user will give error as it was declared inside scope of if

const balance = 1000
if(balance>500) console.log("here")//implicit scope
if(balance>500) console.log("here"),console.log("here1")//This should not be practiced at all dont be oversmart

if(balance<500){
    console.log("less than 500 ")
}else if(balance<750){
    console.log("less than 750")   
}
else{
    console.log(`balance is ${balance}`)
}// balance is 1000


//-------------------------------------------------------------------------------------

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
 
if(userLoggedIn && debitCard && 2==3){
    console.log("Allow To Buy course")
}// no output

if(loggedInFromEmail || loggedInFromGoogle || false){
    console.log("Logged in from any one ")
}// logged in from anyone