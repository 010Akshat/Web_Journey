// Refer copy for notes.
// Interviewer may ask question like story

// Error: .forEach function does not exist of arr 
// Indirectly he/she asking you to write polyfill.

const arr = [1,2,3,4,5,6];


// Machine Coding on Prototypes.
// ForEach
// Define Real signature for forEach
const ret = arr.forEach((value,index)=>{
    console.log(`Value at Index ${index} id ${value}`);
})
console.log(ret);
// hence , No return , input as ->value,index and calls function for everyValue

/*Now to understand we will write custom forEach (In real life scenario , polyfill are used to add your functions
in prototype */

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        let originalArray = this;
        for(let i=0;i<originalArray.length;i++){
            userFn(originalArray[i],i);
        }
    }
}
const ret2 = arr.myForEach((value,index)=>{
    console.log(`Value at Index ${index} id ${value}`);
})
console.log(ret2);

// Map
const mpret=arr.map((value)=>(value*2))
console.log(mpret);
console.log(arr);
/* signature -> return new Array , input userFn and iterate on everyelement.
It does not modify existing array */

if(!Array.prototype.myMap){
    Array.prototype.myMap= function(userFn){
        let newArr=[];
        for(let i=0;i<this.length;i++){
            newArr.push(userFn(this[i],i));
        }
        return newArr;
    }
}
const mympret=arr.myMap((value,index)=>(value*5)); // In original map index is also provided , thats why given , it will also work if you dont provide it.
console.log(mympret)


// filter
// signature 
const fltret=arr.filter((value)=>(value!=2))
console.log(fltret);

/* 
Return new Array | input :userFn
and if userFn returns true then it adds value to the newArr;
*/
if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        let res=[];
        for(let i=0;i<this.length;i++){
            if(userFn(this[i]))res.push(this[i]);
        }
        return res;
    }
}
const myfltret = arr.myFilter((value)=>(!(value&1)));
console.log(myfltret);

