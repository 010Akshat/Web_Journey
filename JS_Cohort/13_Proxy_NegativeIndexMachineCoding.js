// ++++++++++++++++++++++++ Very IMP Interview Question++++++++++++++++++++
// Main aim is to find whether student knows about concept of proxy or not.
// We need to achieve that we can access member of an array using negative index?

const user ={
    name:"Hitesh",
    age:40,
    password:"123"
}
/* Now we have to save this user saved in database and now we want to access it but we 
don't want to give access to password , so here proxy is used. */

// Most Used Syntax for proxy
const proxyUser = new Proxy(user,{
    get(target,prop){  // target is user and prop is proxyUser.YAHA_PE_JO_BHI_LIKHA
        if(prop==="password")
            throw new Error("Access Denied")
        return target[prop];
    },
    set(target,prop,value){
        target[prop]=value;
    }
})
// console.log(proxyUser.name);

// arr.length uses the concept of proxy internally.

// Now , we come to negative index question.
let arr = [1,2,3,4,5,6,7,8,9,10]

function negativeIndex(arr){
    return new Proxy(arr,{
        get(target,prop){
            const index = Number(prop);
            if(index<0){
                return target[target.length+index]
            }
            return target[index];
        }, // this comma is necessary
        set(target,prop,value){
            const index=Number(prop);
            if(index<0){
                target[target.length+index]=value
            }
            else{
                target[index]=value;
            }
            return true;
            
        }
    })
}

let newArr = negativeIndex(arr);
console.log(arr[-1]);
console.log(newArr[-1]);
newArr[-1]=22;
console.log(arr[-1])//undefined (Proxy can reflect changes in original data but you access it through functionality of newArray)
// console.log(arr); // [1,2,3,4,5,6,7,8,9,22]
// console.log(newArr); // [1,2,3,4,5,6,7,8,9,22]

/*
Proxy in js gives impact of original data
ChatGPT said:
Yes, in JavaScript, a Proxy allows you to create an object that wraps around another object, giving you control over its interactions while still affecting the original data. It enables you to define custom behavior for fundamental operations like reading, writing, deleting, and function calling.

How Proxy Impacts the Original Data
A Proxy does not clone or copy the original object; instead, it acts as an intermediary. When you modify the Proxy, it directly modifies the underlying (target) object.

Example: Impact on Original Data
javascript
Copy
Edit
const target = { name: "Akshat", age: 22 };

const handler = {
  set(obj, prop, value) {
    console.log(`Setting ${prop} to ${value}`);
    obj[prop] = value; // Modifies the original object
    return true;
  },
  get(obj, prop) {
    console.log(`Getting ${prop}`);
    return obj[prop]; // Accesses the original object
  }
};

const proxy = new Proxy(target, handler);

proxy.name = "Jain";  // Setting name to Jain
console.log(target.name); // Jain (original object is affected)

console.log(proxy.age); // Getting age -> 22
*/

