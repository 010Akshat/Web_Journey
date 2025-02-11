class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    // for any variable here we can use setter or getter method (setter to set value and getter to get value)
    get password(){  // syntax for getter , with same name of variable
        // return  this.password.toUpperCase(); // Here you will stackoverflow error ,because constructor is also trying to access value of password and 
        //getter method also.It is termed as Race Condition. Hence it has a unique solution.
        return this._password.toUpperCase();
    }
    // Now if you created getter method you must have to create settor method otherwise you will receive error .
    //TypeError: Cannot set property password of #<User> which has only a getter
    set password(value){
        // this.password=value.toUpperCase();  // Here you will stackoverflow error ,because constructor is also trying to set value 
        //of password and settor method also.It is termed as Race Condition. Hence , it has unique solution.
        this._password=value;
    }

    // We can do same for email as well
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value.toUpperCase();
    }

}
const hitesh = new User("h@hitesh.ai","123");
console.log(hitesh.email); // H@HITESH.AI
console.log(hitesh.password);//123




