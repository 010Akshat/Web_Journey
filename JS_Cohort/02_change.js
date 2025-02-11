let fname="piyush"
let fname2=fname;

fname2="hitesh"
console.log(fname2)
console.log(fname)

let p1={
    fname:'piyush',
    lname:'garg',
    address:{
        hno:1,
        sno:1
    }
}
let p2=p1;
p2.fname="hitesh";
console.log(p2.fname)
console.log(p1.fname)


// shallow copy
let p3={
    ...p1
}
p3.fname='akshat'
console.log(p3.fname)
console.log(p1.fname)

// deep copy
const p1String=JSON.stringify(p1);
const p4=JSON.parse(p1String);