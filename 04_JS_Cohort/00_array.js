// Create an array of teas
const teas = ["Grean Tea","Black tea","Oolang tea","white Tea","Herbal Tea"];
console.log(teas);

//Add "Chamomile Tea"
teas.push("Chamomile Tea");

// Remove "Oolang Tea"
const index = teas.indexOf("Oolang tea");
if(index>-1)teas.splice(index,1);
console.log(teas);

//Filter the list to only include teas that the caffeinated
const caffeinatedTeas=teas.filter((tea)=>{
    if(tea!=="Chamomile Tea") return tea;
}
)
console.log(caffeinatedTeas)

// sort the list of teas.
teas.sort();
console.log(teas);

const test = ["🐔","🥚","🐣"];
console.log(test);
test.sort();
console.log(test);

// Use for loop to print each type of tea in array.
for(let i=0;i<teas.length;i++){
    console.log(teas[i]);
}

// Use for loop to count how many teas are caffeinated
let cnt=0;
for(let i=0;i<teas.length;i++){
    if(teas[i]!=="Herbal Tea")cnt++;
}
console.log(cnt);

// Use a for loop to create new Array with all uppercase letter teas.
let uppercaseTeas=[];
for(let i=0;i<teas.length;i++){
    uppercaseTeas.push(teas[i].toUpperCase());
}
console.log(uppercaseTeas);

// Use for loop to find the tea name with most characters.
let longestTea="";
for(let i=0;i<teas.length;i++){
    if(longestTea.length<teas[i].length)longestTea=teas[i];
}
console.log(longestTea);

// Use for loop to reverse the array.
let n=teas.length;
for(let i=0;i<n/2;i++){
    [teas[i],teas[n-1-i]]=[teas[n-1-i],teas[i]];
}
console.log(teas);