


const totalScore ={ computerScore : 0 , playerScore : 0}


// to get randome choices from computer
function getComputerChoice(){
    const rps = ["Rock" , "Paper" , "Scissors"];
    const randomNum = Math.floor(Math.random()*3);
    return rps[randomNum];
}


//to get the score of player based on player and computer choices
function getPlayerResult(playerChoice,computerChoice){
    let pScore = 0;
    if(playerChoice == computerChoice){
        pScore =0;
    } else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
        pScore = 1
    }  else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
        pScore = 1
    }  else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
        pScore = 1
    } else{
        pScore = -1
    }

    //return score
    return pScore
}
//to get the score of player based on player and computer choices
function getComputerResult(playerChoice,computerChoice){
    let cScore = 0;
    if(computerChoice == playerChoice){
        cScore =0;
    } else if(computerChoice == 'Rock' && playerChoice == 'Scissors'){
        cScore = 1
    }  else if(computerChoice == 'Paper' && playerChoice == 'Rock'){
        cScore = 1
    }  else if(computerChoice == 'Scissors' && playerChoice == 'Paper'){
        cScore = 1
    } else{
        cScore = -1
    }

    //return score
    return cScore
}


//show result
function showResult(score,playerChoice,computerChoice){
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    const computerScoreDiv = document.getElementById('computer-score')
    if ( score == -1){
        resultDiv.style.cssText = 'color : red';
        resultDiv.innerText = 'You Lose..! 😢'
    } else if (score == 0){
        resultDiv.style.cssText = 'color : yellow';
        resultDiv.innerText = 'You Tie..! 😶'
        
    } else{
        resultDiv.style.cssText = 'color : green';
        resultDiv.innerText = 'You Won! 😍'
    }

    handsDiv.innerText = `👨 ${playerChoice} vs 🤖 ${computerChoice}`

    playerScoreDiv.innerText = `your score : ${totalScore['playerScore']}`
    computerScoreDiv.innerText = `computer score : ${totalScore['computerScore']}`
}


function onClickRPS(playerChoice){
    console.log({playerChoice})
    const computerChoice = getComputerChoice()
    console.log({computerChoice})
    const pScore = getPlayerResult(playerChoice,computerChoice)
    totalScore['playerScore'] +=pScore;

    const cScore = getComputerResult(playerChoice,computerChoice)
    totalScore['computerScore'] +=cScore;
    
    showResult(pScore,playerChoice,computerChoice);
    console.log(totalScore)
}


//add event listeners
function playGame(){
    const rpsButtons = document.querySelectorAll('.rpsButton');

    rpsButtons.forEach(rpsButton => {
            rpsButton.onclick = () => onClickRPS(rpsButton.value)
        })

    const endGameButton = document.getElementById('endGameButton')

    endGameButton.onclick = () => stopGame()
 
    }

    
    //endgame funmction
function stopGame(){
        totalScore['playerScore'] = 0
        totalScore['computerScore'] = 0

        const resultDiv = document.getElementById('result')
        const handsDiv = document.getElementById('hands')
        const playerScoreDiv = document.getElementById('player-score')
        const computerScoreDiv = document.getElementById('computer-score')

        resultDiv.innerText = ''
        handsDiv.innerText = ''
        playerScoreDiv.innerText = ''
        computerScoreDiv.innerText = ''
     }
    

     //function call
    playGame();


