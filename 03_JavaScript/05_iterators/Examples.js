//Q:-  I want all expenses grouped by category
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

// Another way
// let expenseReport = expenses.reduce((report,expense)=>{
//     report[expense.category]?report[expense.category]+=expense.amount:report[expense.category]=expense.amount;
//     return report
// },{});
console.log("Expense report" , expenseReport)

// Q:- I want all products which are incomplete sorted according to priority
let tasks=[
    {description:"Write report", completed: false , priority:2},
    {description:"Send Email", completed: true , priority:3},
    {description:"Prepare Presentation", completed: false , priority:1}
]
const incompleteTasks = tasks.reduce((list,task)=>{
    if(!task.completed){
        for(let i in list){
            if(list[i].priority>task.priority){
                list.splice(i,0,task);
                return list;
            }
        }
        list.push(task);
    }
    return list;
},[])
console.log("Incomplete Tasks: ", incompleteTasks)