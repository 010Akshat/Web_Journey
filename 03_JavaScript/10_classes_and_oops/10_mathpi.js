console.log(Math.PI);//3.141592653589793
Math.PI=4;
console.log(Math.PI);//3.141592653589793

// Now question in value of Math.Pi cannot be changed? Why ? answer is not that simple that it is constant.
const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor); 
//{
//     value: 3.141592653589793,
//     writable: false,  // Propery which is hardcodedly made false by JS which cannot be changed to true 
//     enumerable: false,
//     configurable: false
//   }
// ___________________________INTERVIEW___________________________
// writable , enumerble and configurable all are false , in such detail you have to give answer.

//___________Now we will made our own object , give these properties ourselves____________________

// const myNewObj = Object.create(null); // In this way object can also be created

const chai = {
    name:"ginger chai",
    price: 250,
    isAvailable: true
}
console.log(chai); //{ name: 'ginger chai', price: 250, isAvailable: true }

// Now it also has descriptor properties and how it they can be set.
console.log(Object.getOwnPropertyDescriptor(chai)); // undefined
// remember chai is object not property , by this you will only get description of properties , hence undefined.

console.log(Object.getOwnPropertyDescriptor(chai,'name'));
// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }
// for (let [key,value] of chai) {
//     console.log(`${key}:${value}`)
// }   // ERROR // chai is not iterable , so for that we have solution below 
// Object cannot be iterated through for of loop but array can.
for (let [key,value] of Object.entries(chai)) {
    console.log(`${key}:${value}`)
}
// name:ginger chai
// price:250
// isAvailable:true



// Lets Discuss about concept of ' Code fat gaya '
const chai2 = {
    name:"hari chai",
    price: 350,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nhi bani")
    }
}
for (let [key,value] of Object.entries(chai2)) {
    console.log(`${key}:${value}`)
}
// name:hari chai
// price:350
// isAvailable:true
// orderChai:function(){
//         console.log("chai nhi bani")
//     }
   
// Now in real world scenarios we dont want such type of situation , we only want key value pairs .
// For that we have solution
for (let [key,value] of Object.entries(chai2)) {
    if(typeof value !=='function'){
    console.log(`${key}:${value}`)
    }
}
// name:hari chai
// price:350
// isAvailable:true

//_______________________What is enumerable and configurable?__________________________________________________________________________________________________
/*Enumerable: This attribute defines whether the property shows up during enumeration of the properties on the object. 
Enumeration occurs in operations such as for...in loops or when using methods like Object.keys(). 
If a property is enumerable, it will be included in these operations; otherwise, it will be skipped.*/

/*Configurable: This attribute determines whether the property's attributes (other than value and writable) can be changed and 
if the property can be deleted from the object. If configurable is true, 
the property can be modified or deleted using Object.defineProperty() or delete operator. 
If configurable is false, attempting to change the property's attributes or delete the property will throw an error in 
strict mode or silently fail in non-strict mode. */
Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
// {
//     value: 'ginger chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
// }

for (let [key,value] of Object.entries(chai)) {
    console.log(`${key}:${value}`)
}
// price:250
// isAvailable:true   // Because we set enumerable of name as false 

