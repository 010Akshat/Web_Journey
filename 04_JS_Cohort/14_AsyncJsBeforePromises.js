//Synchronous Code -> Blocking Code
//Asynchronous Code -> Non-Blocking Code
// Consider a synchronous code / Blocking Code
console.log("Hi")
const { rejects } = require('assert');
const fs = require('fs');
const contents = fs.readFileSync('./JS_Cohort/test.txt','utf-8'); // readFileSync is synchronous
console.log(contents);
console.log("Bye")
/* Output:
Hi
Hello I am text  file.
Bye
*/

// Now this is an synchronous code where file reading operation is blocking further lines to execute
// Now this is not heavy task but in case when built large application synchronously 
// And each user block the server for its use then other users has to wait 
// it will result to an poor quality website like CBSE website.

// Thats why Async Js is used.
// We have already studied about promises to implement async Js, but what before promises?
// So now we implement above code asynchronously but in a way that promise does not exist.
// if promise exist then fs.readfile return a promise which can handled using its 3 properties i.e .then .catch .finally
// But we will use only callBacks

console.log("Hi");
fs.readFile('./JS_Cohort/test.txt','utf-8',(err,content)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(content);
    }
})
console.log("Bye");
/* Output :
Hi
Bye
Hello I am text  file.
*/
/* here readFile is asynchronous code, it will run our provided call back after receiving content in 
background. This is how earlier coders were solely relied on callbacks */

// Another Small Example
console.log("Start")
function sum(a,b,cb){
    setTimeout(()=>{
        cb(a+b);
    },3*1000)
}
sum(2,5,(res)=>{
    console.log(res);    
})
console.log("End")
/* Output:
Start
End
7
*/
/* Whole concept is ki
Jis function me time lag sakta hai(sum) usme hum ek cb bhejenge.
Uska matlab hai hai ki hum sum ko keh rahe hai tu apna time le .
result nikal . Jab bhi tera result ajaye na tu mera bheja hue cb function
me apna result bhejna aur usko call kardena.

Iss case me humne sum function ki definition bhi khud di hai.

fs.readFile function ki definition pehle se kahi define hai .
vo kam karne ke baad do cheeze bhejta hai error ya content.
To humne usse apna cb bhej diya ki jab tera result ajaye to usse hamare cb pe pass karke call kardena.
Ab hume kaise pata ki fs.readFile kam karne ke baad do cheeze bhejta hai,
ab vo predefined function hai , alag ke baare me padho , pata chal jayega aur ussi according tum cb bhejo apna.
*/

/*
Concludingly , before promise Async Js was implemented using cb.
Every function which wanted to be used as async , accepts call back as its last parameter.
*/


// Whats the problem in this way of achieving asynchronous property in code.
/* 
For this let's consider example:
1. Read the contents of the file test.txt
2. Then create a new file named as backup.txt
3. Copy the contents of hello file to backup file
4. delete the hello file
*/

// Aynsc Code for task
// --------------Legacy Code-------------------------
// console.log("Hi");
// fs.readFile('./JS_Cohort/test.txt','utf-8',(err,content)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(content);
//         fs.writeFile('backup.txt',content,function(err){
//             if(err) {
//                 console.log(err)
//             }
//             else{
//                 fs.unlink('./JS_Cohort/test.txt', function(e){
//                     if(e){
//                         console.log(e);
//                     }
//                     else{
//                         console.log('File Deleted Successfully');
//                     }
//                 })
//             }
//         })
//     }
// })
// console.log("Bye");

// Now above code is working , it will delete test.txt file so don't run it.
// Our Main is to  understand what is the problem in this way asynchronous coding and why promises are used?
/* Reason is readability of above code , because every step depends on output of previous step,
hence we have to use callback inside callback & again cb inside cb.
This situation is called callback hell.
When code appears to be diamond to the right, i.e you are in callback hell which reduces readabilty of such code.
-> It is very difficult to handle such codes , hence promises are now used.
*/

// Ok , now promises has been introduced.
// ---------------- Modern Code----------------
// const fsv2=require('fs/promises')
// fsv2
//   .readFile('./JS_Cohort/test.txt','utf-8') // Now it returns promise
//   .then((content)=>fsv2.writeFile('./JS_Cohort/backup.txt',content))
//   .then(()=>fsv2.unlink('./JS_Cohort/test.txt'))
//   .catch((e)=> console.log('Error',e));

// Now this code using promise does not suffer from callback hell and readability is good.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* Assume that 
const fsv2 = require('fs/promises') it does not exist.
i.e Promises are made but yet not used in fs system.
Then can make our own fs/promises so that we can handle fs using promises.
It is called Promisification.

// Promisification : Converting legacy code to support promisification.
Note: Don't confuse it with Polyfill of promises , that is different.
*/


function readFileWithPromise(filepath,encoding){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,encoding,(err,content)=>{
            // Surely Surely Read 02_promises.js in 09_advance_one in 03_Javascript.
            if(err){
                reject(err); // reject ka kaam :-> .catch property ko call karna
            }
            else{
                resolve(content); // resolve ka kaam :-> .then property ko call karna
            }
        })
    })
}
function writeFileWithPromise(filepath,content){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filepath,content,(err)=>{
            if(err){
                reject(err);
            }
            else{
                resolve();
            }
        })
    })
}

function unlinkFileWithPromise(filepath){
    return new Promise((resolve,reject)=>{
        fs.unlink(filepath,(e)=>{
            if(err){
                reject(e);
            }
            else{
                resolve();
            }
        })
    })
}
// Wrapper : This terminology is used often in such cases as we are just wrapping fs function with promise.
const result = readFileWithPromise('./JS_Cohort/test.txt','utf-8');
result
    .then((content)=>writeFileWithPromise('./JS_Cohort/backup.txt',content))
    .then(()=>unlinkFileWithPromise('./JS_Cohort/test.txt'))
    .catch(()=>{console.log(e)})
    .finally(()=>console.log("Done"))

// This was promisification . Library Bluebird yahi kaam karti thi , it takes input code and it promisify it.
// But hume inki requirement nhi bachi hai kyuki ab sab promisified hai.
// It does not mean it is not important , badi or purani companies ka code samjhne ke liye in sab ki req. hai.

//+++++++++++++++++++++ ASYNC AWAIT +++++++++++++++++++++++++++++++++++++++++
/* .then .catch are only way to handle promises , ans is no.
Here comes async await
const result = readFileWithPromise('./JS_Cohort/test.txt','utf-8');
result
    .then((content)=>writeFileWithPromise('./JS_Cohort/backup.txt',content))
    .then(()=>unlinkFileWithPromise('./JS_Cohort/test.txt'))
    .catch(()=>{console.log(e)})
    .finally(()=>console.log("Done"))
-> Here understand carefully , this whole is a async code , but is pure async portion me code 
synchronously chal rah hai.
-> To iss async code ko sync feeling dene ke liye we use async await.
-> Hence , async await is just syntactic sugar over .then .catch
-> Their is no difference in performance
*/

function wait(seconds){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(),seconds*1000)
    });
}
async function allTasks() {
    try{
        const fileContent = await readFileWithPromise('./JS_Cohort/test.txt','utf-8'); 
        //await -> isko likhne se .then me jo content return ho rah tha vo fileContent me pass hojayge.
        // also it return promise everytime.
        //we want to wait for 10 sec.
        await wait(10)
        await writeFileWithPromise('./backup.txt',fileContent);
        await unlinkFileWithPromise('./JS_Cohort/test.txt')
    }
    catch(e){
        console.log('Error',e);
    }
    finally{
        console.log("All Done");
    }   
}
//As you write async in front of funtion , it returns promise.
// const res=allTasks(), Hence -> res is also a promise.
allTasks().then(()=>{
    console.log('Done');
})

// Note: if your don't write async in allTasks fn and write await inside fn , it will give error 
// await fn only runs when function is async
// wait(10) ios graceful way for waiting explicitly.


