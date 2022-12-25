let player1 = 'X';
let player2 = 'O';
let board
let currentPlayer = player1;
let score1 = 0;
let score2 = 0;

let boardSpots = {
    spot1 : document.getElementById('1'),
    spot2 : document.getElementById('2'),
    spot3 : document.getElementById('3'),
    spot4 : document.getElementById('4'),
    spot5 : document.getElementById('5'),
    spot6 : document.getElementById('6'),
    spot7 : document.getElementById('7'),
    spot8 : document.getElementById('8'),
    spot9 : document.getElementById('9'),
}

function startGame(id) {
    let spot = document.getElementById(id);
    let playerSpan = document.getElementById('player');
    
    let nextSpan = document.getElementById('next-player');
    if(spot.innerText == ''){
        
        if(currentPlayer == player1){
            winningMatch();
            playerSpan.innerText = player2;
            nextSpan.innerText = player1;
            spot.innerText = player1;
            currentPlayer = player2;
        }else if(currentPlayer == player2){
            winningMatch();
            playerSpan.innerText = player1;
            nextSpan.innerText = player2;
            spot.innerText = player2;
            currentPlayer = player1;
        }
    }
    
    checkScore();
};
function winningMatch() {
    // let spotArray = Object.getOwnPropertyNames(boardSpots);
    let p1Score = document.getElementById('player1-score');
    let p2Score = document.getElementById('player2-score');

    if(boardSpots.spot1.innerText == player1 && boardSpots.spot2.innerText == player1 && boardSpots.spot3.innerText == player1){
        score1++
        p1Score = score1;
    }
}
function checkScore() {
    if((score1 == 3 && score2 < score1)|| (score2 == 3 && score1 < score2)){
        alert('Game Over.')
    }
}


// if(boardSpots.spot1.innerText == player1 && boardSpots.spot2.innerText == player1 && boardSpots.spot3.innerText == player1){
//     score1++
// }else if(boardSpots.spot4.innerText == player1 && boardSpots.spot5.innerText == player1 && boardSpots.spot6.innerText == player1){
//     score1++
// }else if (boardSpots.spot7.innerText == player1 && boardSpots.spot8.innerText == player1 && boardSpots.spot9.innerText == player1){
//     score1++
// }

