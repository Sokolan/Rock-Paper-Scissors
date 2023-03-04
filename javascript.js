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

function playRound(playerSelection, computerSelection){
    let res = getRoundResult(playerSelection, computerSelection);
    if(res === "Winner"){
        return `You Wan! ${playerSelection} beats ${computerSelection}`;
    }
    else if(res === "Loser"){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if(res === 'Tie'){
        return `It\'s a Tie! you both chose ${playerSelection}`;
    }
}

function caseSensetiveInput(str){
    str.toLowerCase();
    let res = str.substring(0,1).toUpperCase();
    res += str.substring(1);
    return res;
}

function checkIfInputLegal(str){
    if(str !== "Rock" && str !== "Scissors" && str !== "Paper"){
        return false;
    }
    return true;
}

function game(){
    for(let i = 0 ; i < 1 ; ++i){
        let playerSelection = prompt(`Your choice: `);
        playerSelection = caseSensetiveInput(playerSelection);
        if(!checkIfInputLegal(playerSelection)){
            --i;
            continue;
        }
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();