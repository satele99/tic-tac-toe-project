const board = document.getElementById('container');
const xCard = document.getElementById('player1-score');
const oCard = document.getElementById('player2-score');
const currentPlayer = document.getElementById('player');
const nextPlayer = document.getElementById('next-player');
const declareWin = document.getElementById('winner');
let playerTurn = true;
let roundOver = false;
let xScore = 0;
let oScore = 0;
const childId = ['0.0', '0.1', '0.2', '1.0', '1.1', '1.2', '2.0', '2.1', '2.2'];
let playBoard = [
    ['','',''],
    ['','',''],
    ['','','']
];

let winningCombos = [
    ['0.0','0.1','0.2'],
    ['1.0','1.1','1.2'],
    ['2.0','2.1','2.2'],
    ['0.0','1.1','2.2'],
    ['0.2','1.1','2.0'],
    ['0.0','1.0','2.0'],
    ['0.1','1.1','2.1'],
    ['0.2','1.2','2.2']
];

currentPlayer.innerText = 'X'
nextPlayer.innerText = 'O'

board.addEventListener('click', () => {
    let spot = event.target;
    declareWin.innerText = ''
    
        if(spot.innerText == ""){
            let getSpot = spot.id.split('.');
            if(playerTurn == true){
                playBoard[getSpot[0]][getSpot[1]] = 'X';
                spot.innerText = 'X';
                currentPlayer.innerText = 'O'
                nextPlayer.innerText = 'X'
                playerTurn = false;
            }else{
                playBoard[getSpot[0]][getSpot[1]] = 'O';
                spot.innerText = 'O';
                currentPlayer.innerText = 'X';
                nextPlayer.innerText = 'O'
                playerTurn = true;
            }
            if(checkWinner() == 'X Wins'){
                declareWin.innerText = 'X Wins!';
                xScore++
                xCard.innerText = xScore;
                clearBoard();
                playerTurn = true
            }else if(checkWinner() == 'O Wins'){
                declareWin.innerText = 'O Wins!';
                oScore++
                oCard.innerText = oScore;
                clearBoard();
                playerTurn = true
            }else if(checkWinner() == 'Draw'){
                declareWin.innerText = 'Draw!';
                clearBoard();
                playerTurn = true
            }
        }
    
}); 

function checkWinner() {
    let boardId0 = '';
    let boardId1 = '';
    let boardId2 = '';
    for(let comb of winningCombos){
        boardId0 = document.getElementById(comb[0]);
        boardId1 = document.getElementById(comb[1]);
        boardId2 = document.getElementById(comb[2]);
        if(boardId0.innerText == 'X' && boardId1.innerText == 'X' && boardId2.innerText == 'X'){
            isDraw = false;
         return 'X Wins'
        }else if (boardId0.innerText == 'O' && boardId1.innerText == 'O' && boardId2.innerText == 'O'){
            isDraw = false;
         return 'O Wins'
        }else if(playBoard[0][0] != '' && playBoard[0][1] != '' && playBoard[0][2] != '' && playBoard[1][0] != '' &&
        playBoard[1][1] != '' && playBoard[1][2] != '' && playBoard[2][0] != '' && playBoard[2][1] != '' && playBoard[2][2] != ''){
            return 'Draw'
        }
        
    }
    console.log(playBoard);
};

function clearBoard() {
    for(let id of childId){
        let thisSpot = document.getElementById(id);
        thisSpot.innerText = '';
    }
    playBoard = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    currentPlayer.innerText = 'X'
    nextPlayer.innerText = 'O'
};

function reset(){
    location.reload();
};



