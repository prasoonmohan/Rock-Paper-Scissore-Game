


const totalScore ={ computerScore : 0 , playerScore : 0}


// to get randome choices from computer
function getComputerChoice(){
    const rps = ["Rock" , "Paper" , "Scissors"];
    const randomNum = Math.floor(Math.random()*3);
    return rps[randomNum];
}


//to get the score og player based on player and computer choices
function getResult(playerChoice,computerChoice){
    let score = 0;
    if(playerChoice == computerChoice){
        score =0;
    } else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
        score = 1
    }  else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
        score = 1
    }  else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
        score = 1
    } else{
        score = -1
    }

    //return score
    return score
}


//show result
function showResult(score,playerChoice,computerChoice){
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    if ( score == -1){
        resultDiv.innerText = 'You Lose..!'
    } else if (score == 0){
        resultDiv.innerText = 'You Tie..!'
        
    } else{
        resultDiv.innerText = 'You Won!'
    }

    handsDiv.innerText = `👨 ${playerChoice} vs 🤖 ${computerChoice}`

    playerScoreDiv.innerText = `your score : ${totalScore['playerScore']}`
}


function onClickRPS(playerChoice){
    console.log({playerChoice})
    const computerChoice = getComputerChoice()
    console.log({computerChoice})
    const score = getResult(playerChoice,computerChoice)
    totalScore['playerScore'] +=score
    // totalScore['computerScore'] +=score
    console.log({score})
    showResult(score,playerChoice,computerChoice);
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

        resultDiv.innerText = ''
        handsDiv.innerText = ''
        playerScoreDiv.innerText = ''
     }
    

     //function call
    playGame();


