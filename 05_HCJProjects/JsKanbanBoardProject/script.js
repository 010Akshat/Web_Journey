const addTaskBtn = document.getElementById('add-task-btn');
const todoBoard = document.getElementById('todo-board');

addTaskBtn.addEventListener('click',()=>{
    const input = prompt('What is the task?');
    if(!input)return;
    const taskCard= document.createElement('p');
    taskCard.classList.add('item');
    taskCard.innerText=input;
    taskCard.setAttribute('draggable',true);
    attachDragEvents(taskCard)
    todoBoard.appendChild(taskCard);
})

const allBoards = document.querySelectorAll('.board');
const allItems = document.querySelectorAll('.item');


function attachDragEvents(target){
    target.addEventListener('dragstart',()=>{
        target.classList.add('flying');
    })
    target.addEventListener('dragend',()=>{
        target.classList.remove('flying');
    })
}
allItems.forEach((item)=>attachDragEvents(item))

/* allItems.forEach(attachDragEvents) // this line will work same , it will only work when parameter 
incoming and outgoing are same , as item is receiving and only item is going */

allBoards.forEach((board)=>{
    board.addEventListener('dragover',()=>{
        const flyingElement = document.querySelector('.flying');
        console.log(`${board} Kuch to mere upar se gya ${flyingElement}`);
        board.appendChild(flyingElement)
    })
})