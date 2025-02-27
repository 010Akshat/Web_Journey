//Q:-  I want all expenses grouped by category

// MY WAY
// let expenseReport = expenses.reduce((report,expense)=>{
//     report[expense.category]?report[expense.category]+=expense.amount:report[expense.category]=expense.amount;
//     return report
// },{});

// SIR WAY

let expenses =[
    {description:"Groceries",amount:50,category:"Food"},
    {description:"Electricity Bill",amount:100,category:"Utilities"},
    {description:"Dinner",amount:30,category:"Food"},
    {description:"Internet Bill",amount:50,category:"Utilities"}
]

let expenseReport = expenses.reduce((report,expense)=>{
    report[expense.category]=(report[expense.category]|| 0)+expense.amount;
    return report
},{});

console.log("Expense report" , expenseReport)

// Q:- I want all products which are incomplete sorted according to priority
let tasks=[
    {description:"Write report", completed: false , priority:2},
    {description:"Send Email", completed: true , priority:3},
    {description:"Prepare Presentation", completed: false , priority:1}
]


// My Way (More Complex)
// const incompleteTasks = tasks.reduce((list,task)=>{
//     if(!task.completed){
//         for(let i in list){
//             if(list[i].priority>task.priority){
//                 list.splice(i,0,task);
//                 return list;
//             }
//         }
//         list.push(task);
//     }
//     return list;
// },[])

// Sir Way
const incompleteTasks = tasks
    .filter((task)=>!task.completed)
    .sort((a,b)=> a.priority-b.priority);
console.log("Incomplete Tasks: ", incompleteTasks)


// Q:- I want Average Rating of a movie 
let movieRatings = [
    {title: "Movie A", ratings: [4,5,3]},
    {title: "Movie B", ratings: [5,5,4]},
    {title: "Movie C", ratings: [3,4,2]}
]

// MY WAY

// Read nine.js to underStand this example completely

// If we don't want change in original array
// let movieRatingsStrings =JSON.stringify(movieRatings);
// let newMovieRatings= JSON.parse(movieRatingsStrings);
// newMovieRatings.map((movie)=>{
//     movie.ratings=(movie.ratings.reduce((acc,num)=> acc+num)/movie.ratings.length).toPrecision(3);
//     return movie;
// })
// newMovieRatings.forEach((movie)=>{
//     movie.ratings=(movie.ratings.reduce((acc,num)=> acc+num)/movie.ratings.length).toPrecision(3);
// })
// Both forEach and Map will work (Read nine.js thoroughly)
// console.log(movieRatings)
// console.log(newMovieRatings)

// If we can afford Change in original array

// movieRatings.forEach((movie)=>{
//     movie.ratings=(movie.ratings.reduce((acc,num)=> acc+num)/movie.ratings.length).toPrecision(3);
// })
// movieRatings.map((movie)=>{
//     movie.ratings=(movie.ratings.reduce((acc,num)=> acc+num)/movie.ratings.length).toPrecision(3);
//     return movie;
// })
// console.log(movieRatings)


// SIR WAY
// Sir write a code without using JSON.stringfy and ol and does not altering original array;
let newMovieRatings = movieRatings.map((movie)=>{
    let total = movie.ratings.reduce((sum,rating)=>sum+rating);
    let avg = total/movie.ratings.length;
    // movie.ratings=avg;
    // return movie;  // If we do this original will get impact
    return {...movie , ratings:avg}  // Since we are creating a new object (shallow copy , original will not get impacted).
})
console.log(movieRatings)
console.log(newMovieRatings)

// Again read nine.js and then do this , to underStand every bit and get crystal clear diff between map and forEach 
// and underStand their properties and what is the role of stack and heap.