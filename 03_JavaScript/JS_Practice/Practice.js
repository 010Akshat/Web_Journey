// function check(value){
//     if(value)console.log("true")
//     else console.log("false")
// }

// check(1);//true
// check(0);//false
// check("XCzc");//t
// check("");//f
// check([]);//t
// check([1,2,3]);//t

// console.log("HI")
// const data = fetch('https://dummy-json.mock.beeceptor.com/todo');
// data
// .then((res)=>res.json())
// .then((data)=>{console.log(data)})
// console.log("Bye");
fetch("https://dummyjson.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Error:", err));
