class Person{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
    getFullName(){
        return `${this.fname} ${this.lname}`;
    }
}

const p1= new Person('Piyush', 'Garg')
const p2= new Person('Akash', 'Kadlag')

console.log(p1.getFullName());
console.log(p2.getFullName());
if(Person.prototype===p1.__proto__){
    console.log("Yes");
    
}
console.log(Person.__proto__);
console.log(Person.prototype);
