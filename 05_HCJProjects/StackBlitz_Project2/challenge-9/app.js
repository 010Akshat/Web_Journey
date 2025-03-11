const toggleBtn=document.querySelector('.toggle-btn');
const content=document.querySelector('.content');
const crossBtn=document.querySelector('.close-btn');
const panel = document.querySelector('.panel');
toggleBtn.addEventListener('click',()=>{
    panel.classList.add('active');
    event.stopPropagation();
})
const hidePanel = (button)=>{
    button.addEventListener('click',(event)=>{
        panel.classList.remove('active');
    })
}
hidePanel(content);
hidePanel(crossBtn);