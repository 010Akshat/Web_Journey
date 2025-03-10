// Object Literal ........ Means we are literally creating a object.
// Object Literal is Object only
// Object Literal or Object is a collection of properties and methods

// Whenever you use word this means you are refering to current context.(Get Feel)


const user = {
    username:"hitesh", // property
    loginCount: 8,  // property
    signedIn: true, // property
    getUserDetails: function(){        // method
        console.log("Got user details from database");
        // console.log(`Username:${username}`) // here you will get error
        console.log(`Username:${this.username}`)// Username:hitesh
        console.log(this) 
        // {
        //   username: 'hitesh',
        //   loginCount: 8,
        //   signedIn: true,
        //   getUserDetails: [Function: getUserDetails]
        // }
        // undefined
    }
}
console.log(user.username); //hitesh
console.log(user.getUserDetails()); //Got user details from database
console.log(this) //{}
// Remember in console after inspecting any webpage , you will get 'window' object (Global Object) which have hundreds of methods etc.



// now if you want to make second user , then you have to make new object user2 again. 
// It is not feasible 
// for that  constructors are used 


// Now , for example 
// const prommiseOne= new Promise()
// const date = new Date()
// here new is constructor function
// It allows us to create multiple instance from a single object.
// or in other words new the constructor function is used to make new context 

//function constructor
function User(username,loginCount,isLoggedIn){
    this.username/*our variable*/=username/*argument passed*/;
    this.loginCount/*our variable*/=loginCount/*argument passed*/;
    this.isLoggedIn/*our variable*/=isLoggedIn/*argument passed*/;

    return this;
}
const userOne=User("hitesh",12,true);

// console.log(userOne);
{/* <ref *1> Object [global] {
    global: [Circular *1],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    structuredClone: [Function: structuredClone],
    atob: [Getter/Setter],
    btoa: [Getter/Setter],
    performance: [Getter/Setter],
    fetch: [Getter/Setter],
    crypto: [Getter],
    username: 'hitesh',  -----------------------------HIGHLIGHT---------------------------
    loginCount: 12,   -----------------------------HIGHLIGHT---------------------------
    isLoggedIn: true   -----------------------------HIGHLIGHT---------------------------
  } */}

// But now 
const userTwo = User("ChaiAurCode",11,false);
// console.log(userOne); // userOne not userTwo 
/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Getter/Setter],
  crypto: [Getter],
  username: 'ChaiAurCode', -----------------------------HIGHLIGHT---------------------------
  loginCount: 11,   -----------------------------HIGHLIGHT---------------------------
  isLoggedIn: false  -----------------------------HIGHLIGHT---------------------------
} */

// That means value is overwrited 
//+++++++++++++++++++++++++++++++++++++ Here , we will use new (constructor function and it will provide us new context everytime And we will get correct result)+++++++++++++
const userThree= new User("aj1",10,true);
console.log(userThree);
// User { username: 'aj1', loginCount: 10, isLoggedIn: true }
const userFour= new User("aj1",12,false);
console.log(userFour);
// User { username: 'aj1', loginCount: 12, isLoggedIn: false }
// If in function User you remove 'return this' , then also after using new keyword , you will get same result.


//+++++++++++++++++++++Notes++++++++++++++++++++
/*
Step 1-> Whenever you use new keyword , an empty object is created which is called instance.
Step 2-> Due to new keyword , constructor function is called and it gives arguments to new instance.
Step 3-> Due to 'this' keyword , argumenets are injected in instance
step 4-> You get everything inside function
*/
console.log(userThree.constructor);// [Function: User]  // hence constructor PROPERTY(it is a property) is just referencing to itself telling that i am function named User


// instanceof 

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
const auto = new Car('Honda', 'Accord', 1998);
  
console.log(auto instanceof Car);
  // Expected output: true
  
console.log(auto instanceof Object);
  // Expected output: true
  


