// Object Constructors
const tinderUser = new Object() // Singleton
const tinderUser1={} // Non-Singleton

console.log(tinderUser) // {}
console.log(tinderUser1) //{} //Both will generate same output

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser) // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname) // hitesh // Nesting is possible

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

const objans1={obj1,obj2}
console.log(objans1) // similarly like Arrays , not correct way as objans1 will have two elements as object

const objans2=Object.assign({},obj1,obj2) //{} - target , obj1 - source, obj2 - source
console.log(objans2) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1) //{ '1': 'a', '2': 'b' }

const objans3=Object.assign(obj1,obj2) //obj1 - target,obj2 - source
console.log(objans3) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

/* As we can observe first object will be considered as target so objans2 way is more correct as 
it will not effect original object obj1 */

// Most Used Way for object  , same as ARRAY .. SPREAD CONCEPT
const objans4 = {...obj1, ...obj2,...obj3}
console.log(objans4)// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' } // it will spread all and collect unique key value pairs


//------------------When You Get Data From DataBase or API-------------------------------
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    }
]
console.log(users[1].email)//b@gmail.com

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(typeof Object.keys(tinderUser));//object(arrays are objects in JS)
console.log(Object.values(tinderUser));//[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

/* Above methods are very very imp as they result in arrays , so we can apply all properties of arrays on it.
It will be of great use is future*/
   
//----------------------------------------------------------------
// Sometimes you are looping through objects in array , and sometimes value does not exist , for that
console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true 
console.log(tinderUser.hasOwnProperty('isLogged')) // false

//-------------------DOUBT---------------------
// What does it practically mean that you cannot create muktiple instances of of sigleton object???????


//-------------------Destructuring Of Object--------------------------
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor} = course // it is destructuring 
console.log(courseInstructor) // hitesh // we dont need tpo write course.courseInstructor

// You can change name also
const {price:p}=course
console.log(p) //999