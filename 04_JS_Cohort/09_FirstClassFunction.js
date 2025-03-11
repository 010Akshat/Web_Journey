function applyOperation(a,b,operation){
    return operation(a,b);
}
const result = applyOperation(5,4,(x,y)=>x/y)
console.log(result);
