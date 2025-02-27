// ++++++++++++++++++++++++ Very IMP Interview Question++++++++++++++++++++
// Main aim is to find whether student knows about concept of proxy or not.
// We need to achieve that we can access member of an array using negative index?

const user ={
    name:"Hitesh",
    age:40,
    password:"123"
}
/* Now we have to save this user saved in database and now we want to access it but we 
don't want to give access to password , so here proxy is used. */

// Most Used Syntax for proxy
const proxyUser = new Proxy(user,{
    get(target,prop){  // target is user and prop is proxyUser.YAHA_PE_JO_BHI_LIKHA
        if(prop==="password")
            throw new Error("Access Denied")
        return target[prop];
    },
    set(target,prop,value){
        target[prop]=value;
    }
})
console.log(proxyUser.password);