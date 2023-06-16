var playerTurn, moves, isGameOver, span, restartButton,ResetButton;
playerTurn = "x";
moves = 0;
isGameOver = false;
span = document.getElementsByTagName("span");
ResetButton= '<button onclick="window.location.reload()">Reset The Game</button>';
function play(y) {
    if (y.dataset.player == "none" && window.isGameOver == false) {
        y.innerHTML = playerTurn;
        y.dataset.player = playerTurn;
        moves++;
        if (playerTurn == "x") {
            playerTurn = "o";
        } else if (playerTurn == "o") {
            playerTurn = "x";
        }
    }

    /* Win Types */

    checkWinner(1, 2, 3);
    checkWinner(4, 5, 6);
    checkWinner(7, 8, 9);
    checkWinner(1, 4, 7);
    checkWinner(2, 5, 8);
    checkWinner(3, 6, 9);
    checkWinner(1, 5, 9);
    checkWinner(3, 5, 7);

    /* No Winner */

   if (moves == 9 && isGameOver == false) { 
        var gameOverAlertElement = "<b>GAME OVER </b><br><br> NO " + ' Winner !!! <br><br>' + ResetButton;
        var div = document.createElement("div");
        div.className = "alert";
        div.innerHTML = gameOverAlertElement;
        document.getElementsByTagName("body")[0].appendChild(div);
 
    }

}

function checkWinner(a, b, c) {
    a--;
    b--;
    c--;
    if ((span[a].dataset.player === span[b].dataset.player) && (span[b].dataset.player === span[c].dataset.player) && (span[a].dataset.player === span[c].dataset.player) && (span[a].dataset.player === "x" || span[a].dataset.player === "o") && isGameOver == false) {
        span[a].parentNode.className += " activeBox";
        span[b].parentNode.className += " activeBox";
        span[c].parentNode.className += " activeBox";
        gameOver(a);
    }
}

function gameOver(a) {
    var gameOverAlertElement = "<b>GAME OVER </b><br><br> Player " + span[a].dataset.player.toUpperCase() + ' Win !!! <br><br>' +ResetButton;
    var div = document.createElement("div");
    div.className = "alert";
    div.innerHTML = gameOverAlertElement;
    document.getElementsByTagName("body")[0].appendChild(div);
    window.isGameOver = true;
    moves = 0;
    
}
