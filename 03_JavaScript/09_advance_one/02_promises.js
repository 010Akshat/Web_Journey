//----------------------------------------------------------PROMISES----------------------------------------------------------------
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Promise means that the task given by developer will not be completed instantly . Some task or operations can be done laterdepending on the usecase 
//Ex. File Access from systems(Kernel read the file and then control goes back to program)
//Ex. Request From DATABASE
//Ex. CryptoGraphy ,like password encryption
// In all such examples we will use asynchronous programming 
// async , await can be used or promises(mostly used in modern programming )
// In short , promises complete in future


/*A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed. */

// Noticebly, mostly you will consume the promise and you wil less create a promise 

// Promise is Object

// History Of Promises 
/*
When js doesnt have direct promises , then too asynchronous js was used. Either async, await was used but promises syntax was great. so promises were used libraries like 
Q and Blurbird which let users to use them. But then in future these we incorporated into pure Js. 
*/
// const promiseOne = new Promise() // we are creating a instance of object (similar to we create a instance of class)
//callBack hell -> callback inside callback inside callback
// promise reduce call 

// Firstly , we will create promise to get good understanding of promises
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls , cryptography,network calls
    setTimeout(function(){
        console.log('Async Task is complete ');
        resolve();// it is a method , it executes and connects with .then so that promise can be completed .
        // it can pass arguments too and irt perform various tasks behind the scene

    },1000);
})

//Secondly, we will consume promises 
promiseOne.then(function(){
    console.log("Promise Consumed");
})   //then() has direct connection with your resolve  // we get a callback in then , i.e a function we get which automatically receive a 
//argument which is returned from work after completing from promise
// in short as soon as your async task will be completed , resolve will inform to your then that task is completed


//--------------------------------------------We can combine the above stuff -----------------------------------------
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    },1000);
}).then(function(){
    console.log("task 2 completed");
})

//--------------------Now it was said .then will receive arguments , lets justify it--------------------'
// In other words how data will be passed from created promise to then-----------
// it is majorly when you get data from data base and pass it to then function----------------------
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"});// generally from here object is passes but anything can be passed
    },1000);
})

promiseThree.then(function(data){ // data is argument we received
    console.log(data);
})

//-------------------------------------------------
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function() {
    let error = true;
    if(!error){
        resolve({username:"chai",email:"chai@example.com"});
    }
    else{
        reject("ERROR:Something went wrong")
    }
},1000);
})

// promiseFour.then().catch() // so far it is cleared if i get a value i will receive in then if get error i will receive in catch by using function
// lets go into callback hell avoidance
// we cam use multiple .then and catch // it can be sometimes called as chaining
promiseFour
.then((user)=>{
    console.log(user);// but from here I just want to return only username. 
    // Note here anything cannot be returned by using a constant (const username=promiseFour.then()........... is not possible)
    // For that purpose we will use another then method  
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejected"));
// so far we concluded how to handle error also 

//-----------------------------------------------------------------------------------------------
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = true;
        if(!error){
            resolve({username:"javascript",password:"123"});
        }
        else{
            reject("ERROR:JS went wrong")
        }
    },1000);
})

// note-> it is not like that 'then' and 'catch' are only preferable . 
// Lets try another appoach async and await .. Rememeber neither is better .. Both are correct
// In async await its just errors are not gracefully handled 

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()


//------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Using API

// async function getAllUsers(){
//     // earlier fetch was library , now it is just object, it takes only URL and return promise
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = response.json(); // Data Arrives In The form of String , so converting into Json and storing in a variable data
//         console.log(data);
//     } catch (error) {
//         console.log(`Error : ${error}`)
//     }
// }
// getAllUsers()
// Now this above code is error free , no mistake in syntax but still not giving output
// here we understand the real reason why we use async programming
// as told earlier by hitesh sir , many things takes time , for them we need async programming 
// here converting data into json is also time consuming process , thats why we will use again await to solve issue 
async function getAllUsers(){
        // earlier fetch was library , now it is just object, it takes only URL and return promise
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json(); // Data Arrives In The form of String , so converting into Json and storing in a variable data
            console.log(data);
        } catch (error) {
            console.log(`Error : ${error}`)
        }
    }
// getAllUsers() // uncomment function to get result
// Now we will get the desired output


//-----------------------------------------------------------------------------------------------------------
// Doing all this stuff using then and catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json()
})
.then((data)=>{
    console.log(data)
}).catch((error)=> console.log(error));

// Now , noticably in OUTPUT firstly we getting result of fetch and then our remaining promises
// This we will study in next part;

// Working of fetch i.e video 41 is written in next file fetch.js
/* fetch('https://jsonplaceholder.typicode.com/users') ,
 these five letters F E T C H and ye complete line ,iski baal ki khaal nikaalenge */
