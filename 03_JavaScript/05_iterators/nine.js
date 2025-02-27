/*
The main difference between forEach() and map() is their returning property:

Feature	                                  map()	                                       forEach()
Returns	                  ✅ A new array with transformed values	    ❌ Always undefined (no return value)
Modifies Original Array?  ❌ No (creates a new array)	            ❌ No (but can modify manually)
Use Case	              When you need a new transformed array	      When you need to perform actions on each element without returning anything

Example 1: Using map()
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3] (original remains unchanged)
✅ map() creates a new array with modified values.

Example 2: Using forEach()
const numbers = [1, 2, 3];

const result = numbers.forEach(num => console.log(num * 2)); 

console.log(result); // undefined
console.log(numbers); // [1, 2, 3] (original remains unchanged)

✅ forEach() does not return a new array, it just executes a function for each element.

When to Use map() vs forEach()?
Use map() if you need a new transformed array.
Use forEach() when you just need to perform a side effect.


DOUBT:  forEach modifies original array
No, forEach() does not modify the original array itself.

It does not modify the array structure but can mutate objects or elements inside it if they are reference types.

Example 1: forEach() Does NOT Modify Primitive Values
const numbers = [1, 2, 3];

numbers.forEach(num => num = num * 2); // Does nothing to the original array

console.log(numbers); // [1, 2, 3] (Unchanged)

🚫 The original array is NOT modified because num is just a copy of the element.

Example 2: forEach() Can Modify Objects (Reference Types)
const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 28 }
];

users.forEach(user => user.age += 1); // Modifying object properties

console.log(users);
/* Output:
[
  { name: "Alice", age: 23 },
  { name: "Bob", age: 29 }
]

Key Takeaways
forEach() does not modify the array structure, but it can modify objects inside it if they are reference types.
map() is preferred for transformations where you need a new array instead of modifying the original one.

*/


/*
map also return new array if array contain objects
ChatGPT said:
Yes! map() always returns a new array, even if the original array contains objects. However, whether the objects 
themselves are modified or not depends on how you handle them inside map().

🔹 Example 1: map() Returns a New Array, But Objects Are Still Referenced
const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 28 }
];

const updatedUsers = users.map(user => {
  user.age += 1; // Modifies the existing object
  return user;
});

console.log(updatedUsers);
/* Output:
[
  { name: "Alice", age: 23 },
  { name: "Bob", age: 29 }
]
*/
// console.log(users);
/* Output:
[
  { name: "Alice", age: 23 },
  { name: "Bob", age: 29 }
] (Original is also modified)
*/
// Even though map() returns a new array, the original objects are modified because objects are reference types.


