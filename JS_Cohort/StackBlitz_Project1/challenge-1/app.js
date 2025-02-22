const stat = document.getElementById('status');
const button=document.getElementById('toggleButton');
const bulb=document.getElementById('bulb');
const bodyClass=document.body.classList;
button.addEventListener('click',()=>{
    if(!bodyClass.contains('dark-mode')){
        button.innerText="Turn Off";
        stat.innerText="Status: On";
        body.classList.add("dark-mode");
        bulb.classList.remove('off');
    }
    else{
        button.innerText="Turn On";
        stat.innerText="Status: Off";
        body.classList.remove("dark-mode");
        bulb.classList.add('off');
    }
})