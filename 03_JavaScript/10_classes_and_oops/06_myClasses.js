// ES6  Using Js after JS6
/*ES6, short for ECMAScript 2015, is a significant update to the JavaScript language specification.
 It stands for the 6th edition of ECMAScript, the standardized scripting language specification 
 upon which JavaScript is based. */
class User{
    constructor(username,email,password){  // as soon as object is created of this class using new keyword , this constructor will be called 
        this.username=username;
        this.email=email;
        this.password=password;
    }  

    encryptPassword(){ // it is function , here syntax is changed inside class and now function is called method
            return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}
const chai = new User("chai","chai@google.com","123")

console.log(chai.encryptPassword()); //123abc
console.log(chai.changeUsername()); //CHAI

// Behind The scene
// If we were not provided funtionality of classes then work would by like this . Function also behave like a object
function User1(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;   
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const chai1 = new User1("chai","chai@google.com","123")

console.log(chai1.encryptPassword()); //123abc
console.log(chai1.changeUsername()); //CHAI

