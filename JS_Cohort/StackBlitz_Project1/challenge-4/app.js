const button=document.getElementById("addButton");
const inp = document.getElementById("taskInput");
const taskList=document.getElementById("taskList");
const totalTasks=document.getElementById('totalTasks');
const completedTasks=document.getElementById('completedTasks')
const empty=document.getElementsByClassName("empty-list")[0];
let taskComp=0;


button.addEventListener('click',()=>{
    if(inp.value=='')return;
    const itemBar=document.createElement('div');
    const check=document.createElement('input');
    const para=document.createElement('p');
    const delButton=document.createElement('button');
    check.type="checkbox"
    check.classList.add('complete-checkbox');
    para.classList.add('task-text')
    para.innerText=inp.value;
    itemBar.appendChild(check);
    itemBar.appendChild(para);
    itemBar.appendChild(delButton);
    itemBar.classList.add('task-item');
    check.addEventListener('change',()=>{
        if(event.target.checked){
            itemBar.classList.add('completed');
            completedTasks.innerText=`Completed: ${++taskComp}`
        }
        else{
            completedTasks.innerText=`Completed: ${--taskComp}`
            itemBar.classList.remove('completed');  
        } 
    })
    delButton.classList.add('delete-button')
    delButton.innerText="DELETE";
    delButton.addEventListener('click',()=>{
        if(check.checked){
            completedTasks.innerText=`Completed: ${--taskComp}`;
        }
        itemBar.remove();
        if(taskList.children.length<=1){
            console.log("Here i Am");
            empty.hidden=false;
        }
    })
    taskList.appendChild(itemBar);
    inp.value='';
    if(taskList.children.length>=2){
        // console.log("Here i Am");
        // empty.setAttribute("hidden","true");
        empty.hidden=true;
    }
    totalTasks.innerText=`Total tasks: ${taskList.children.length-1}`
})