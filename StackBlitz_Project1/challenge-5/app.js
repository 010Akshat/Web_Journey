/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

// variables
let index=0;
const carousel=document.getElementById('carouselTrack');
const caption = document.getElementById('caption')
const prevButton=document.getElementById('prevButton');
const nextButton=document.getElementById('nextButton');
const nav=document.getElementById('carouselNav');
const autoPlayBtn= document.getElementById('autoPlayButton');
const timer=document.getElementById('timerDisplay');
let isPlaying=false;

for(let image of images){
  const img=document.createElement('img');
  img.src=image.url;
  img.classList.add("carousel-slide");
  carousel.appendChild(img);
  const span=document.createElement('span');
  span.classList.add("carousel-indicator");
  nav.appendChild(span);
}
nav.children[index].classList.add('active');
caption.innerText=images[index].caption;
const eventHandler=(direction)=>{
  nav.children[index].classList.remove('active');
  index=(index+direction+4)%4;
  carousel.style.transform=`translateX(-${index*100}%)`;
  caption.innerText=images[index].caption;
  nav.children[index].classList.add('active');
  console.log(nav.children[index].classList);
}
const next=nextButton.addEventListener('click',()=>eventHandler(1))
const prev=prevButton.addEventListener('click',()=>eventHandler(-1))

let stopInterval,stopTimer,s=4;
const timerInterval = ()=>{
  timer.innerText=`Next Slide in ${s}s`;
  s--;
  if(s<=0)s=5;
};

autoPlayBtn.addEventListener('click',()=>{
  if(!isPlaying){
    stopInterval=setInterval(eventHandler,5000,1);
    stopTimer=setInterval(timerInterval,1000);
    autoPlayBtn.innerText=`Stop Auto Play`;
  }
  else{
      clearInterval(stopInterval);
      clearInterval(stopTimer);
      s=4;
      timer.innerText='';
      autoPlayBtn.innerText=`Start Auto Play`;
  }
  isPlaying=!isPlaying;
});