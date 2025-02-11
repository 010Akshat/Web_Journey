let score="33abc"
let score1= null
let score2;
let score3=true
let score4="33"
// console.log(typeof score)  // string
// console.log(typeof (score)) // string

let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)
let valueInNumber4 = Number(score4)

// console.log(typeof valueInNumber)  // number
// console.log(valueInNumber) //Nan- NotAnNumber
// console.log(valueInNumber1) //0
// console.log(valueInNumber2) //Nan
// console.log(valueInNumber3) //1 for true 0 for false
// console.log(typeof valueInNumber4) //number

let isLoggedIn=1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn) // boolean

// 1=>true ; 0+=>false
//"" => false
//"anything" =>true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber) // 33
// console.log(typeof stringNumber) // string


// ****************** Operations ********************//

let value=3
let negValue = -value
// console.log(negValue)
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**4) //16 
// console.log(16%3) // 1

let str1="hello"
let str2="aj"
let str3=str1+str2
// console.log(str3)
// console.log("1"+2)//12
// console.log(1+"2")//12
// console.log("1"+2+2)//122
// console.log(1+2+"2")//32
// // itna samjho yaha tak ki agar string pehle hai to sabko string ki trah use karnege otherwise value add hogi
// console.log(true+"2")//true2
// console.log(true+false+"2")//12 (0+1+"2")
// console.log("2"+true+false)//2truefalse
// console.log(false+"2")//false2

// console.log(true)//obvio true aayega 
// console.log(+true)// 1 aayega .. these are tricky conversion but using them is very bad coding
// console.log(+false)// 0 aayega .. these are tricky conversion but using them is very bad coding
// // console.log(true+)// ERROR aayega .. these are tricky conversion but using them is very bad coding
// console.log(+"")// 0 aayega .. But Dont use them

let num1,num2,num3
num1=num2=num3=2+2
console.log(num1)
console.log(num2)
console.log(num3)
let gameCounter = 100
++gameCounter;
console.log(gameCounter)



