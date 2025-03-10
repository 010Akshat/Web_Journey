class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME : ${this.username}`);
    }
    static createId(){ // We use static when we dont want that every object instantiated with this class has access to this method
        return `123`;
    }
}

const hitesh = new User("hitesh")
//console.log(hitesh.createId()) // ERROR

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}
const iphone = new Teacher("iphone","i@phone.com")
iphone.logMe() //USERNAME : iphone
// console.log(iphone.createId()) // ERROR
console.log(User.createId());
