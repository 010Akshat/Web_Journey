/*
Throttling in JavaScript
Throttling is a technique used to improve performance by limiting the number of times a function can be executed 
within a specified time interval. This is particularly useful in scenarios where a function is 
triggered frequently, such as:

Scrolling
Resizing the window
Mouse movement
Button clicks
How Throttling Works
Throttling ensures that the function executes at most once in a given time period, no matter how many times the 
event is triggered.

Example: If you throttle a function to execute every 500ms, it will run only once per 500ms, 
even if the event fires multiple times.
*/

const ptaNhi = (fn,delay)=>{
    let myId=null;
    return (...args)=>{
        if(myId===null){
            myId=fn(...args);
            console.log(args)
            myId = setTimeout(()=>{
                myId=null;
            },delay)
        }
    }
}
function getResource(q,w,e){
    console.log(`Fetching Resource ${q} ${w} ${e}`);
}
let a=ptaNhi(()=>getResource("i","am","here"),2000)
a(5,6,7)
a(3,4,5)
a(1,2,3)

/*
Fetching Resource i am here
[ 5, 6, 7 ]
*/
 
// see debouncing code to properly call ptaNhi()
//Suppose you requested a resource on website(Now resource is its way but before it arrival you again requested).
// So during that timeInterval , website wont request for resource again.

// Note : Promise Polyfill , debouncing and throttling are not easy or beginner topics.
// They are good question for machine coding round for SDE2 or quality companies in SDE1 role.
// Negative index also.
