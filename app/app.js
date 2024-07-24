//start

const start =() =>{
    setTimeout(function(){
        confetti.start()
    }, 1000) // 1000 = 1 sekund
};


//stop
const stop =() =>{
    setTimeout(function(){
        confetti.stop()
    },3000)
}


const hint  = document.getElementById('hint')
const guessInput = document.getElementById('guess')
const checkButton = document.getElementById('check-btn')
const restartButton = document.getElementById('restart')
const result = document.querySelector('.result')
const game = document.getElementById('game')
const guessNum = document.getElementById('guessed-nums')
const answerstatus = document.getElementById('answer-status')
const numGuess = document.getElementById('no-of-guesses')
const GuessedNumbers = document.getElementById('guessed-nums')
const expactation = document.getElementById('exp')

let answer;
let minNum = 0;
let maxNum = 100;
let counter = 0;
let arrNUm = [];
const play=()=>{
    const userGuess = guessInput.value
    guessNum.innerHTML = `Guessed Numbers are: ${answer}`
    if(userGuess>100 || userGuess<1)
    {
        alert('enter number between from 1 to 100')
        return;
    }
    counter++;
    arrNUm.push(userGuess);
    console.log(arrNUm)
    if(userGuess!=answer)
    {   
        guessInput.style.backgroundColor = "red"
        numGuess.innerHTML = `No. Of Guesses: ${counter}`
        GuessedNumbers.innerHTML = `Guessed Numbers are: ${arrNUm}`
        if(userGuess>answer)
        {
            answerstatus.innerHTML = 'Enter a smaller number';
            answerstatus.style.color = 'red'

        }
        else{
            answerstatus.innerHTML = 'Enter a larger number';
            answerstatus.style.color = 'red'
        }
        if(userGuess>minNum && userGuess<answer)
        {
          minNum = userGuess
        }
        else if(userGuess>answer && userGuess<maxNum) {
          maxNum = userGuess
        }
        expactation.innerHTML = `this number between: ${minNum} < X <${maxNum}`
    }
    else{
        start();
      result.classList.add('result-extra')
      game.style.transition = '2s'
      game.style.display = "none";
      hint.innerHTML = `Correct answer is: ${userGuess} <br>
            Do you want to play again? `
            
    }

}

const init = ()=>{
    answer = Math.floor(Math.random()*100)+1;
    minNum = 0;
    maxNum = 100;
    counter = 0;
    arrNUm = [];
    console.log(answer)

};

guessInput.addEventListener('keydown',(event)=>{
    if(event.keyCode === 13)
    {
        event.preventDefault();
        play();
    }
})
restartButton.addEventListener('click',()=>{
    game.style.display = "grid";
    hint.innerHTML = '';
    init();
    result.classList.remove('result-extra')
    minNum = 0;
    maxNum = 100;
    counter = 0;
    arrNUm = [];
    console.log(answer)
    stop();
})

checkButton.addEventListener('click',play)
window.addEventListener('load',init)