const clock=document.querySelector('.clock');
const digitalClock= document.getElementsByClassName('digital-clock')[0];
const date = document.getElementsByClassName('date')[0];
const months = ["January","February","March","April","May","June","July","August","September","October","Novemver","December"];
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const hour=document.querySelector('.hour');
const minute=document.querySelector('.minute');
const second=document.querySelector('.second');

for(let i=1;i<=12;i++){
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.innerText=`${i}`;
    div.appendChild(span);
    div.classList.add('number');
    div.style.transform=`rotate(${i*30}deg)`;
    span.style.transform=`rotate(-${i*30}deg)`;
    clock.appendChild(div);
}

setInterval(function time(){
    const d=new Date();
    const hours=d.getHours()%12==0?12:d.getHours()%12;
    const minutes=d.getMinutes().toString();
    const min=minutes.length==1?'0'+minutes:minutes;
    const seconds=d.getSeconds().toString();
    const sec = seconds.length==1?'0'+seconds:seconds;
    digitalClock.innerText=`${hours}:${min}:${sec}`;
    const day=d.getDay();
    const dte= d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    date.innerText=`${days[day]} ${dte} ${months[month]} ${year}`;
    hour.style.transform=`rotate(${hours*30+minutes*0.5+seconds*(1/120)}deg)`;
    minute.style.transform=`rotate(${minutes*(6)+seconds*0.1}deg)`;
    second.style.transform=`rotate(${seconds*6}deg)`;
},1000);
