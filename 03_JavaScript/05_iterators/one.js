// for  loop
for (let i = 0; i < 5; i++) {
    const element = i;    
    console.log(element) // 01234 [in different lines]
}

// loop nesting
for(let i=0;i<3;i++){
    console.log(`Outer loop value:${i}`)
    for(let j=0;j<3;j++){
        console.log(`Inner Loop Value: ${j} and Outer loop value:${i}`)
    }
}
//OUTPUT
// Outer loop value:0
// Inner Loop Value: 0 and Outer loop value:0
// Inner Loop Value: 1 and Outer loop value:0
// Inner Loop Value: 2 and Outer loop value:0
// Outer loop value:1
// Inner Loop Value: 0 and Outer loop value:1
// Inner Loop Value: 1 and Outer loop value:1
// Inner Loop Value: 2 and Outer loop value:1
// Outer loop value:2
// Inner Loop Value: 0 and Outer loop value:2
// Inner Loop Value: 1 and Outer loop value:2
// Inner Loop Value: 2 and Outer loop value:2

let myArray = ["flash","superman","batman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}
// Output
// flash
// superman
// batman

//++++++++++++++++++++++++++++++++++ For output in same line JS +++++++++++++++++++++++++++++++++++++++++++++++++++
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    process.stdout.write(element+" ") // flash superman batman
}
console.log()// to get cursor in next line 


// Break And Continue 
for (let index = 1; index <=10; index++) {
    if(index==5){
        console.log(`Detected 5`)
        break; // now Control flow will exit from loop
    }
    console.log(`Value of index is ${index}`)
}
// Value of index is 1
// Value of index is 2
// Value of index is 3
// Value of index is 4
// Detected 5


for (let index = 1; index <=10; index++) {
    if(index==5){
        console.log(`Detected 5`)
        continue; // loop control will go to index++
    }
    console.log(`Value of index is ${index}`)
}
// Value of index is 1
// Value of index is 2
// Value of index is 3
// Value of index is 4
// Detected 5
// Value of index is 6
// Value of index is 7
// Value of index is 8
// Value of index is 9
// Value of index is 10
