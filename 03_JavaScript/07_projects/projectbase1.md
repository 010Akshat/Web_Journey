# Project Related To Dom

## Project Link


# Solution code 1

```
const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body');
// now we get to know that we get NodeList So we can use NodeList
// Every action such as closing tab or moving cursor or clicking button is an event
buttons.forEach(function (button) {
  console.log(button); // HTML Span element and detail for each iteration
  // Now , here we will use event listenener
  button.addEventListener('click', function (e) {
    // e is event object, any name can be given
    console.log(e);   // when you click on color , PointerEvent comes           
    console.log(e.target); // when you click ,HTMLSpanElement comes , it will show event aa kaha se rah hai 
    switch(e.target.id){
      case 'grey':
        body.style.backgroundColor='grey';
        break;
      case 'white':
        body.style.backgroundColor='white';
      break;
      case 'blue':
          body.style.backgroundColor='blue';
      break;
      case 'yellow':
          body.style.backgroundColor='yellow';
      break;
      default:
        break;
 }
})
 
});


```

# Solution code 2

```
const form = document.querySelector('form')
// when form is submitted using get or post method , the data is sent in uRL , this action is by default of form so we need to stop that method 

form .addEventListener('submit',function(e){
  e.preventDefault() // to prevent default action i.e no submission
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  // we are taking height and width after clicking i.e happening of event that is why we are taking them inside actio listenener
  // , if we take them outside they will get empty value as soson as page is loaded
  if(height === '' || height<0 || isNaN(height))
  {
    results.innerText="Please Give a Valid Height"
  }else if(weight === '' || weight<0 || isNaN(weight))
  {
    results.innerText="Please Give a Valid weight"
  }else{
   // results.appendChild(document.createTextNode(`${(weight/(height*height*.01*.01)).toFixed(3)}`))
   // upper one giving correct answer , tried myself
   const bmi = (weight/(height*height*.01*.01)).toFixed(3);
   results.innerHTML=`<span>${bmi}</span>`;
   if(bmi<18.6){
    results.innerHTML=`<span>${bmi} Underweight</span>`;
   } else if(bmi<24.9){
    results.innerHTML=`<span>${bmi} NormalRange</span>`;
   } else{
    results.innerHTML=`<span>${bmi} Overweight</span>`;
   } 
  }


})

```  
# solution 3
```
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')
// let date = new Date()
// const d=date.toLocaleTimeString();
// clock.innerHTML(d)

// in interview it is asked that to make run continously
// dont give fancy answer of server and ol for that we have setInterval
//set Interval Method
// In this , just give method and interval that after how much time that method should be repeated
setInterval(function(){
  let date = new Date()
  const d=date.toLocaleTimeString();
  clock.innerText = d;  // clock.innerHTML will also work
},1000)

```

# Solution 4
```
const form = document.querySelector('.form');
const random = Math.floor((Math.random()*100)+1)
const myArray=[];
const prevGuess=document.querySelector('.guesses')
const lastresult=document.querySelector('.lastResult');
let numGuess=0;
let lowHi=document.querySelector('.lowOrHi')
const userInput=document.querySelector('#guessField')
form.addEventListener('submit',function(e){
  e.preventDefault() // to prevent default action i.e no submission
  const userval =parseInt(userInput.value);
  checkUserValue(userval);
})

function checkUserValue(guess){
  if(isNaN(guess)){
    alert("Plz enter a valid number")
    userInput.value='';
  } else if(guess<1){
    alert("Plz enter a valid number")
    userInput.value='';
  } else if(guess>100){
    alert("Plz enter a valid number")
    userInput.value='';
  } else{
    numGuess++;
    if(numGuess===10){
      lowHi.innerHTML=`You Lose`;
      userInput.value='';
      lastresult.textContent=parseInt(lastresult.textContent)-1;
    }else if(guess === random){
       lowHi.innerHTML=`You Win`;
    } else {
      pushValue(guess);
      userInput.value='';
    }
  }
}
function pushValue(guess){
  myArray.push(guess);
  prevGuess.textContent=myArray;
  lastresult.textContent=parseInt(lastresult.textContent)-1;
}


// From Here Hitesh Sir Code and above tried with help of sir did myself
// let randomNumber = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//   submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert('PLease enter a valid number');
//   } else if (guess < 1) {
//     alert('PLease enter a number more than 1');
//   } else if (guess > 100) {
//     alert('PLease enter a  number less than 100');
//   } else {
//     prevGuess.push(guess);
//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over. Random number was ${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage(`You guessed it right`);
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage(`Number is TOOO low`);
//   } else if (guess > randomNumber) {
//     displayMessage(`Number is TOOO High`);
//   }
// }

// function displayGuess(guess) {
//   userInput.value = '';
//   guessSlot.innerHTML += `${guess}, `;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess} `;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// }

// function newGame() {
//   const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = `${11 - numGuess} `;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);

//     playGame = true;
//   });
// }


```
