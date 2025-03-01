// Dates
/*JavaScript Date objects represent a single moment in time in a platform-independent format. 
Date objects encapsulate an integral number that represents milliseconds since the midnight 
at the beginning of January 1, 1970, UTC (the epoch).*/

let myDate = new Date()
// console.log(myDate)//2024-03-29T08:09:17.597Z  // not readable.
// console.log(myDate.toString())//Fri Mar 29 2024 08:09:17 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString())//  Fri Mar 29 2024
// console.log(myDate.toLocaleDateString())// 3/29/2024
// console.log(myDate.toLocaleTimeString())// 5:27:49 pm
// console.log(myDate.toLocaleString())//3/29/2024, 8:09:17 AM
// console.log(myDate.toISOString())//2024-03-29T08:09:17.597Z
// console.log(myDate.toJSON())//2024-03-29T08:09:17.597Z

// Another impoertant +++++++++ IMP FOR INTERVIEW +++++++++++++++
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
const date = myDate.toLocaleDateString(undefined,options);
console.log(date); //Friday 28 February, 2025 
// Question is asked: What is undefined? -> It refers to local Time Zone.

// // Interview Question
// console.log(typeof myDate) // Object

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString())// Mon Jan 23 2023 // when initializing in this way 0 is considered as first month
let myCreatedDate1= new Date(2023,0,23,5,3)
console.log(myCreatedDate1.toLocaleString())//1/23/2023, 5:03:00 AM
let myCreatedDate2 = new Date("2023-01-14")// In this format("YYYY-MM-DD") 01 is considered as first month
console.log(myCreatedDate2.toDateString())//Sat Jan 14 2023
let myCreatedDate3 = new Date("01-14-2023")// In this format("MM-DD-YYYY") 01 is considered as first month
console.log(myCreatedDate3.toDateString())//Sat Jan 14 2023


//----------------------TIME STAMP---------------------------------
let myTimeStamp = Date.now()
console.log(myTimeStamp)//1711701153161 //It is millisecond value from 1 Jan 1970
console.log(myCreatedDate.getTime())// 1674432000000

// To convert in seconds from milliseconds
console.log(Math.floor(myTimeStamp/1000))//1711701153
//-----------------------TIME STAMP END HERE-------------------------------


let newDate = new Date()
console.log(newDate)//2024-03-29T08:37:30.803Z
console.log(newDate.getDate())//29
console.log(newDate.getMonth())//2 i.e march not feb
console.log(newDate.getFullYear())//2024

//------------------------------------------------------------------------
console.log(newDate.toLocaleString('default',{
    weekday:"long",
    month:"long"
}))// March Friday

