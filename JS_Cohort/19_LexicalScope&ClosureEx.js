function increment(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
let x=increment();
console.log(x());
console.log(x());
console.log(x());

// Each time you call increment() new count variable will be created and can be increment using returned fn.

// Now, drawback of closure.
/*
Memory Leak: You have the reference of returned function in x. Until a reference of memory location is holded,
garbage collector does not remove it , hence x will occupy memory always even when not needed.
Hence for that */
x=null; // if you are not using it later , just null it.