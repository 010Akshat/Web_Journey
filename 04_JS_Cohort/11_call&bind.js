// Firstly Read 05_call.js in 10_classes_oops in 03_JavaScript;

let person1 = {
    name:"ravi",
    greet:function(){
        console.log(`Hello ${this.name}`)
    }
}

let person2={
    name:"hitesh"
}

// Very Important for interview 
// Q:- We call person1 but give context of person2 name

// we have two functions for this call and bind

person1.greet.call(person2) // Hello Hitesh
// call does not return anything
// bind returns the function
let bindf=person1.greet.bind(person2)
bindf(); // Hello Hitesh

