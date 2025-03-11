// Create an object representing a type of tea with properties for name, type and caffeine content.
const teas = {
    name:"Lemon Tea",
    type:"Green",
    caffine:"low"
}
// Access and print the name and type properties of the tea object.

console.log(teas.name)
console.log(teas["type"])

// Add a new property origin to a object.
teas.origin="Assam"

//Change the caffeine level to medium.
teas.caffine="Medium"

//Remove the type property from the tea object
delete teas.type

//Check if the tea object has property origin
console.log(teas.hasOwnProperty("origin"));
console.log("origin" in teas);

// Use for in loop to print all properties of tea object.
for(const key in teas){
    console.log(`${key}: ${teas[key]}`);
}

// Create a nested object representing different types of teas and their properties.
const myTeas ={
    greenTea:{
        name:"Green Tea"
    },
    blackTea:{
        name:"Black Tea"
    }
}

// Create a copy of above object
// shallow copy
const myTeas2={
    ...myTeas
}

// deep copy
const myTeasString = JSON.stringify(myTeas);
const myTeas3=JSON.parse(myTeasString);
console.log(myTeas3)

// Add a method to tea object that return description string.
teas.description=()=>("I am description string");
console.log(teas);
console.log(teas.description());

//Merge two objects representing different teas into one
   // refer old JS notes 
const t1={
    name:"I am tea 1"
}
const t2={
    name:"I am tea 2"
}
const t3=Object.assign({},t1,t2); // { name: 'I am tea 2' }
console.log(t3);

const t4={
    names:"I am tea4",
}
const t5= Object.assign({},t1,t4); //{ name: 'I am tea 1', names: 'I am tea4' }
console.log(t5);

