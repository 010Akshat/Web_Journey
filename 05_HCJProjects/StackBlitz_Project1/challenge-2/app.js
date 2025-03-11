const h1=document.getElementById('mainHeading');
const buttons=document.getElementsByTagName('button')
console.log(buttons)
for(let button of buttons){
    button.addEventListener('click',()=>{
        if (button.id === 'resetButton') {
            h1.style.color = '';
        } else {
            const color = getComputedStyle(button).backgroundColor;
            h1.style.color = color;
        }
    })
}