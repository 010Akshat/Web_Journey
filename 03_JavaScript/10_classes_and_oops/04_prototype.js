let myName="hitesh     "
console.log(myName.length);
// Now our goal is to create a method which gives trueLength i.e 6 here not 11
// We are not talling about myName.trim().length . We want this method to be inject in String so that we can directly use our method.

//________________________________TO DO THIS LETS UNDERSTAND______________________________________________________________________

// Firstly we again go through the concept that function , array string are all object. 
// So if i inject a property directly in global object then it should be accessible to all 
// but vice versa is not true i.e if i inject property or power in arrays it does not mean this property is also in object
//  Let's verify all these concepts using examples

let myHeroes= ["thor","spiderman"];

let heroPower ={
    thor:"Hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all on objects`)
}

heroPower.hitesh();//Hitesh is present in all on objects (For obvious , as injected in global Object)
myHeroes.hitesh();//Hitesh is present in all on objects  (Verified, as array is object, injecting in object will result in that it can be accesible by arrays aslo in fact by any object i.e string or function)


// now lets verify vice versa is not true 
Array.prototype.heyHitesh = function(){
    console.log(`heyHitesh is present in Arrays`);
}

myHeroes.heyHitesh(); //heyHitesh is present in Arrays
//heroPower.heyHitesh(); //ERROR  // hence verified, hierarchy is also clear from here.


//______________________INHERITANCE_________________________________

const User = {
    name:"chai",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo:true
}

const TeachingSupport ={
    isavailable: true
}

const TASupport ={
    makeAssignment: 'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__= User
console.log(Teacher.name) // chai
console.log(TASupport.isavailable) // true

// This all is inheritance or prototypal inheritance ( here we did it manually)
// However this code now is used very less


//_____________________Modern Syntax______________________
Object.setPrototypeOf(TeachingSupport,Teacher)
console.log(TeachingSupport.makeVideo) // true


// Now lets get back to our goal of injecting method to string
// String.prototype.trueLength= function(){
//       return this.trim().length;
// }

// const len=myName.trueLength();
// console.log(len); // 6 
//________________OR______________
String.prototype.trueLength= function(){
    console.log(`${this}`)
    console.log(`True Length is ${this.trim().length}`);
}

myName.trueLength(); // hitesh [nextline]True Length is 6
"akshat  ".trueLength()// akshat [nextline]True Length is 6 (jis matlab this,  jisme bulaya hai)