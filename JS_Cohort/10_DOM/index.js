const button = document.getElementById('add-btn');
const list= document.getElementById('list');
const input=document.getElementById('todo-input');
button.addEventListener('click',()=>{
    const item = input.value;
    if(item==="")return;
    input.value="";
    const childItem= document.createElement('li');
    const crossbtn= document.createElement('button');
    crossbtn.innerText='X';
    childItem.innerHTML=`${item}`;
    childItem.appendChild(crossbtn);
    crossbtn.addEventListener('click',()=>{
        childItem.remove(); 
    })
    list.appendChild(childItem);
})