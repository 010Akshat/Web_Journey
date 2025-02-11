function SetUsername(username){
    // complex DB calls
    this.username=username;
}

function createUser(username,email,password){
    SetUsername(username)
    this.email=email;
    this.password=password;
}
const chai = new createUser("chai","chai@fb.com","123");
console.log(chai) // createUser { email: 'chai@fb.com', password: '123' }
// Now we can only email and password are setting.
/* beacuse SetUsername(username) in this setusername in coming in call stack . value is setting setusername context username
and after execution function is removed from call stack and its variables also 
But we want to set value in createUser wala username 
for that we need to pass createUser ka context to setUserName function.
It is done using .call and hum usko createUser ka this bhi pass karenge , so that
value createUser wale username me hi store ho */
function createUser1(username,email,password){
    SetUsername.call(this,username) // execution context pass kardiya iss function ka , ab createUser1 wale this me value set hogi
    this.email=email;
    this.password=password;
}
const chai1 = new createUser1("chai","chai@fb.com","123");
console.log(chai1) //createUser1 { username: 'chai', email: 'chai@fb.com', password: '123' }