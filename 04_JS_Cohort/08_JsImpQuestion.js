Function.prototype.describe=function(){
    console.log(`output is ${this.name}`);
}

function greet(){
    return`My name is Akshat}`;
}

console.log(greet.describe("akshat")); //output is greet
                                       //undefined

if(Function.prototype.__proto__===Object.prototype)console.log("true1");
if(greet.__proto__===Function.prototype)console.log("true2");
