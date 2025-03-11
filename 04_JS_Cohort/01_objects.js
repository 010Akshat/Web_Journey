const person ={
    x:10,
    firstName:'Piyush',
    lastName:'Garg',
    isMarried:false,
    hasGf:false,
    hobbies:['Coding','Gym'],
    getFullName:function(){
        return "Piyush Garg"
    },
    address:{
        hno:1,
        street:1,
        countryCode:'IN',
        state:'PB'
    }
}

console.log(person.address.hno)
console.log(person.address.xxyyzz)

