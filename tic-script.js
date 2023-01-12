const board = document.getElementById('container');
let playerTurn = true;
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

board.addEventListener('click', () => {
    let spot = event.target;
    if(spot.innerText == ""){
        let getSpot = spot.id.split('.');
        if(playerTurn == true){
            playBoard[getSpot[0]][getSpot[1]] = 'X';
            spot.innerText = 'X';
            playerTurn = false;
            console.log(playBoard);
            // checkWinner(getSpot, spot);
        }else{
            spot.innerText = 'O';
            playBoard[getSpot[0]][getSpot[1]] = 'O';
            playerTurn = true;
            console.log(playBoard)
        }
        console.log(checkWinner());
    }
}); 

function checkWinner() {
    for(let comb of winningCombos){
        console.log(document.getElementById(comb[0]));
        console.log(document.getElementById(comb[1]));
        console.log(document.getElementById(comb[2]));
    }
};



