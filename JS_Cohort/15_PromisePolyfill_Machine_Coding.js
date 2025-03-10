// We are going make our promise.
// It is generally required at SDE-2
// You have to see Machine Coding and Resources video in Cohort in JS Foundation Section
// Javascript visualizer is very necessary to understand this code.

class MyPromise{
    constructor(executorFn){
        this._state='pending';
        this._successCallbacks = [];
        this._errorCallbacks = [];
        this._finallyCallbacks = [];

        this.value = undefined;
        //When the constructor runs, executorFn gets resolverFunction and rejectorFunction parameters, allowing it to call them later.
        executorFn(this.resolverFunction.bind(this), this.rejectorFunction.bind(this));
    }

    then(cb){
        if(this._state=='fulfilled'){
            cb(this.value);
            return this;
        }
        this._successCallbacks.push(cb);
        return this;
    }
    catch(cb){
        if(this._state=='rejected'){
            cb();
            return this;
        }
        this._errorCallbacks.push(cb);
        return this;
    }
    finally(cb){
        if(this._state!=='pending'){
            cb();
            return this;
        }
        this._finallyCallbacks.push(cb);
        return this;
    }
    resolverFunction(value){
        this._state='fulfilled';
        this.value=value;
        this._successCallbacks.forEach((cb)=>cb(value));
        this._finallyCallbacks.forEach((cb)=>cb());
    }
    rejectorFunction(e){
        this._state='rejected';       
        this._errorCallbacks.forEach((cb)=>cb(e));
        this._finallyCallbacks.forEach((cb)=>cb());
    }
}
function wait(seconds){
    const p = new MyPromise((resolve,reject)=>{
        setTimeout(()=>resolve("hahaha"),seconds*1000);
    });
    return p;
}

wait(5)
    .then((val)=>console.log(`Promise Resolved After 3 seconds ${val}`))
    .then(()=>console.log(`.then function doosri baar`))
    .catch((e)=>console.log(`Rejected After 10 seconds ${e}`))
    .finally(()=>console.log(`Mai to har baar chalunga`));

// This code is still not complete.
