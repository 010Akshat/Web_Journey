class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)  // context pass karne wali saari kahani yah par apne aap ho jayegi
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const chai = new Teacher("chai","chai@Teacher.com","123")
chai.addCourse() // A new course was added by chai

const masalaChai = new User("masalaChai");
//masalaChai.addCourse() // ERROR , lower class have properties of upper classes not vice versa
masalaChai.logMe() //USERNAME is masalaChai

console.log(chai===masalaChai) // false 
console.log(chai===Teacher) // false 
console.log(chai instanceof Teacher) // true 
console.log(chai instanceof User) // true // Every Lower class is instance of upper class
