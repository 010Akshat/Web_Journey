const obj ={
      userName:"Akash",
      greet: function(){
        setTimeout(()=>{
          console.log(`Hello ${this}`);
      },1000)
      } 
  }
  console.log("Hi");
  obj.greet();
  console.log("Bye");