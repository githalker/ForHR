let playerScore = 0;
let compScore = 0;
const playerScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(latter){
    if(latter === "r") return "Rock";
    if(latter === "p") return "Paper";
    if(latter === "s")return "Scissors";
}

function win(playerChoice, computerChoice)
{
const playerChoice_div= document.getElementById(playerChoice);
playerScore++;
playerScore_span.innerHTML=playerScore;
compScore_span.innerHTML=compScore;
result_p.innerHTML= `${convertToWord(playerChoice)}  beats  ${convertToWord(computerChoice)} . You win!`;
playerChoice_div.classList.add('green-glow')
setTimeout(() => playerChoice_div.classList.remove('green-glow'),400)
}
function lose(playerChoice, computerChoice)
{   
const playerChoice_div= document.getElementById(playerChoice);
compScore++;
playerScore_span.innerHTML=playerScore;
compScore_span.innerHTML=compScore;
result_p.innerHTML= `${convertToWord(playerChoice)}  loses to  ${convertToWord(computerChoice)} . You lost`;
playerChoice_div.classList.add('red-glow')
setTimeout(() => playerChoice_div.classList.remove('red-glow'),400)
}
function draw(playerChoice, computerChoice)
{
const playerChoice_div= document.getElementById(playerChoice);
playerScore_span.innerHTML=playerScore;
compScore_span.innerHTML=compScore;
result_p.innerHTML= `${convertToWord(playerChoice)}  equals  ${convertToWord(computerChoice)} . it's Draw`;
playerChoice_div.classList.add('gray-glow')
setTimeout(() => playerChoice_div.classList.remove('gray-glow'),400)
}
function game(playerChoice){
    const computerChoice = getComputerChoice();
    switch(playerChoice +computerChoice)
    {
            case"rs":
            case"pr":
            case"sp":
            win(playerChoice,computerChoice);
            break;
            case"rp":
            case"ps":
            case"sr":
            lose(playerChoice, computerChoice);
            break;
            case"rr":
            case"pp":
            case"ss":
            draw(playerChoice, computerChoice);

    }

}

function main() {
rock_div.addEventListener('click', function(){
game("r");
})
paper_div.addEventListener('click', function(){
game("p");
})
scissors_div.addEventListener('click', function(){
game("s");
})
}
main();