const obj1 = {
    fname:'Piyush',
    lname:'Garg',
    getFullName: function(){
        return `${this.fname} ${this.lname}`;
    }
}

const obj2 = {
    fname:'Anirudh',
    lname:'Kadlag',
}

obj2.__proto__=obj1;
// obj1.__proto__=null;
console.log(Object.prototype)
console.log(obj1.__proto__)
console.log(obj2.__proto__)
if(Object.prototype === obj1.__proto__)console.log("ydqiiuBI");

console.log(obj1.getFullName());
console.log(obj2.getFullName());
console.log(obj2.toString());
