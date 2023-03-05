function getComputerChoice(){
    let choice = Math.floor(Math.random() * 10) % 3;
    switch(choice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function isWinner(playerSelection, computerSelection){
    if(playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"){
            return true;
    }
}

function getRoundResult(playerSelection, computerSelection){
    if(isWinner(playerSelection, computerSelection)){
        return "Winner";
    }
    else if(isWinner(computerSelection, playerSelection)){
        return "Loser";
    }
    return "Tie";
}

function updateResult(str){
    const result = document.querySelector('p.result');
    result.textContent = str;
}

function updateScore(winner){
    if(winner === ""){
        return;
    }
    let score;
    if(winner === "player"){
        score = document.querySelector(`p.human-score`);
    }
    else{
        score = document.querySelector('p.ai-score')
    }
    
    let tmp = parseInt(score.textContent);
    ++tmp;
    score.textContent = tmp.toString(); 
}

function resetScores(){
    const scores = document.querySelectorAll(`.result-container p`);
    scores.forEach((score) => {
        score.textContent = `0`;
    });
}

function checkForWin(){
    const human = document.querySelector(`p.human-score`);
    const comp = document.querySelector(`p.ai-score`);

    let humanScore = parseInt(human.textContent);
    let compScore = parseInt(comp.textContent);

    let winner = "";
    if(humanScore === 5){
        winner = "Player";
    }
    else if (compScore === 5){
        winner = "AI";
    }
    else{
        return;
    }
    let str = `Game Ended The Winner Is ${winner}!`;
    const container = document.querySelector(`p.result`);
    container.textContent = str;
    resetScores();
}


function playRound(playerSelection, computerSelection){
    let str = "";
    let res = getRoundResult(playerSelection, computerSelection);
    let winner = "";
    if(res === "Winner"){
        str = `You Wan! ${playerSelection} beats ${computerSelection}`;
        winner = "player";
    }
    else if(res === "Loser"){
        str = `You Lose! ${computerSelection} beats ${playerSelection}`;
        winner = "computer";
    }
    else if(res === 'Tie'){
        str = `It\'s a Tie! you both chose ${playerSelection}`;
    }
    updateResult(str);
    updateScore(winner);
    checkForWin();
}

function showComputerChoice(computerSelection){
    const imges = document.querySelectorAll(`.button`);
    imges.forEach((img) => {
        img.classList.remove('computer-choice');
        if(img.id === computerSelection){
            img.classList.add('computer-choice');
        }
    });
}

function showPlayerChoice(playerSelection){
    const imges = document.querySelectorAll(`.button`);
    imges.forEach((img) => {
        img.classList.remove('player-choice');
        if(img.id === playerSelection){
            img.classList.add('player-choice');
        }
    });
}

function playerSelectionParse(e){
    
    let computerSelection = getComputerChoice();
    showComputerChoice(computerSelection);
    let playerSelection = this.id;
    showPlayerChoice(playerSelection);
    playRound(playerSelection, computerSelection);
}

function game(){
        const buttons = document.querySelectorAll('.button');
        buttons.forEach((button) => {
            button.addEventListener('click', playerSelectionParse);
        });
}

game();