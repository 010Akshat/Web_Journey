const button=document.getElementById("addButton");
const inp = document.getElementById("taskInput");
const taskList=document.getElementById("taskList");
const totalTasks=document.getElementById('totalTasks');
const completedTasks=document.getElementById('completedTasks')
const empty=document.getElementById("empty-list");
// console.log(`here ${button} ${inp} ${taskList}`);
button.addEventListener('click',()=>{
    if(inp.value=='')return;
    const itemBar=document.createElement('div');
    const check=document.createElement('input');
    const para=document.createElement('p');
    const delButton=document.createElement('button');
    // console.log(`${itemBar} ${check} ${para} ${delButton}`);
    check.type="checkbox"
    check.classList.add('complete-checkbox')
    para.classList.add('task-text')
    para.innerText=inp.value;
    check.addEventListener('change',()=>{
        console.log(event.target.checked)
        if(event.target.checked)para.classList.add('completed');
        else para.classList.add('task-text')
    })
    delButton.classList.add('delete-button')
    delButton.innerText="DELETE";
    delButton.addEventListener('click',()=>{
        itemBar.remove();
    })
    itemBar.appendChild(check);
    itemBar.appendChild(para);
    itemBar.appendChild(delButton);
    itemBar.classList.add('task-item')
    taskList.appendChild(itemBar);
    inp.value='';
    // if(taskList.children.length>=2){
    //     console.log("Here i Am")
    //     empty.hidden=true;
    // }
    totalTasks.innerText=`Total tasks: ${taskList.children.length-1}`
})