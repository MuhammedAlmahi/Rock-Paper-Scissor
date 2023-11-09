const score = {
    wins: 0,
    losses:0,
    ties: 0
}

updateScoreElement();

function playGame(playerMove){ 
    pickComputerMove('score')

    let result = ''

    if (playerMove === "✌️"){

        if (computerMove === '👊'){
        result = 'You lose'
        }
        else if (computerMove === '🖐️'){
            result = 'You win'
        }
        else if (computerMove == '✌️'){
            result = 'Tie'
        }
    } 

    if (playerMove === "🖐️"){
        if (computerMove === '👊'){
            result = 'You win'
        }
        else if (computerMove === '🖐️'){
            result = 'Tie'
        }
        else if (computerMove == '✌️'){
            result = 'You lose'
        }
    }

    if (playerMove === '👊'){
        if (computerMove === '👊'){
            result = 'Tie'
        }
        else if (computerMove === '🖐️'){
            result = 'You lose'
        }
        else if (computerMove == '✌️'){
            result = 'You win'
        }
    }


    if (result === 'You win') {
        score.wins += 1
    }
    else if (result === 'You lose') {
        score.losses += 1
    }
    else if (result === 'Tie') {
        score.ties += 1
    }

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You picked ${playerMove} - Coumputer picked ${computerMove}`


}

function updateScoreElement(){
    document.querySelector('.js-socer')
    .innerHTML = `Wins ${score.wins},  Losses ${score.losses},  Ties ${score.ties}\n `;
}

let computerMove = ''  

function pickComputerMove() {

    const randomNumber = Math.random();     

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = '👊'
    } 
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = '🖐️'
    } 
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = '✌️'
    }

    return  ;

    }