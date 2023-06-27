const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const displayResult = document.getElementById('display-result');
const displayScore = document.getElementById('display-score');
const displayMove = document.getElementById('display-move');
const resetBtn = document.getElementById('resetBtn');
const autoPlayBtn = document.getElementById('autoPlayBtn');
const score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
};

document.body.addEventListener('keyup', event => {
    if(event.key === 'r') {
        playGame('rock');
    }else if (event.key === 'p') {
        playGame('paper');
    } else if (event.key === 's') {
        playGame('scissors');
    }
})

rock.addEventListener('click', play => {
    playGame('rock');
});

paper.addEventListener('click', play => {
    playGame('paper');
});

scissors.addEventListener('click', play => {
    playGame('scissors');
});

resetBtn.addEventListener('click', resetScore => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    localStorage.removeItem('score')

    updateScore()
})

autoPlayBtn.addEventListener('click', autoPlay => {
   autoPlaying()
})


let isAutoPlaying = false;
let intervalId;
const autoPlaying = () => {
    if(!isAutoPlaying) {
        intervalId = setInterval(() => {
            const playing = player2Move();
            playGame(playing);
        },1000);
        isAutoPlaying = true
        autoPlayBtn.innerHTML = 'Stop Play'

    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
        autoPlayBtn.innerHTML = 'Auto Play';
    }
}

function playGame (move) {
    let result = '';
    const player2 = player2Move();
    if(move === 'rock') {
        if(player2 === 'rock') {
           result = 'Tie.';
        }else if (player2 === 'paper') {
            result = 'You lose.';
        }else {
            result = 'You win.';
        }

    }else if(move === 'paper') {
        if(player2 === 'rock') {
            result = 'You win.';
         }else if (player2 === 'paper') {
             result = 'Tie.';
         }else {
             result = 'You lose.';
         } 

    }else if(move === 'scissors') {
        if(player2 === 'rock') {
            result = 'You lose.';
         }else if (player2 === 'paper') {
             result = 'You win.';
         }else {
             result = 'Tie.';
         }
    }

    if(result === 'You win.') {
        score.wins++;
    } else if(result === 'You lose.'){
        score.losses++;
    }else {
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    displayResult.innerHTML = result;

    displayMove.innerHTML = `You <img src= ./img/${move}.png class="moveImg" alt="move"> <img src="./img/${player2}.png" alt="" class="moveImg"> Player 2 `
}

const updateScore = () => {
    displayScore.innerHTML = `Wins:${score.wins} Lose:${score.losses} Tie:${score.ties}`
}



const player2Move = () => {
    const randomMove = Math.random();
    let player2Move = '';

    if(randomMove >= 0 && randomMove < 0.33) {
        player2Move = 'scissors';

    }else if (randomMove > 0.33 && randomMove < 0.66) {
        player2Move = 'rock';

    }else {
        player2Move = 'paper';
    }
    return player2Move
}
console.log(player2Move())