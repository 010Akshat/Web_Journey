let prevButton=-1;
const buttons=document.getElementsByClassName('accordion-button');
const items=document.getElementsByClassName('accordion-item');

for(let i=0;i< buttons.length;i++){
    buttons[i].addEventListener('click',()=>{
        if(prevButton!=i){
            items[i].classList.add('active');
            if(prevButton!=-1)
                items[prevButton].classList.remove('active');
            prevButton=i; 
        }
        else{
            items[i].classList.remove('active');
            prevButton=-1;
        }

    })
}