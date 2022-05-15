let p1 = true;
let p2 = false;

let targetElement = document.getElementById('board');

let turn = document.getElementById("turn");

let turnCount = 0;

function Touched(ev) {
    if (p1) {
        ev.target.textContent = "X";
        p1 = false;
        p2 = true;
        turnCount++;
        turn.textContent = "Player :: 2";
    } else if (p2) {
        ev.target.textContent = "O";
        p1 = true;
        p2 = false;
        turnCount++;
        turn.textContent = "Player :: 1";
    }
    checkWin();
    if (turnCount >= 9) {
        turn.textContent = `Tie Game :(`;
    }
  }

  let divs = document.getElementsByClassName('square');

  function reset() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].textContent = "";
    }
    p1 = true;
    p2 = false;
    turn.textContent = "Player :: 1";
    turnCount = 0;
  }

  function checkWin() {
    let arr = [];
    for (let i = 0; i < divs.length; i++) {
        arr.push(divs[i].textContent);
    }
    checkArray(arr, 0, 1, 2, "X");
    checkArray(arr, 3, 4, 5, "X");
    checkArray(arr, 6, 7, 8, "X");
    checkArray(arr, 0, 3, 6, "X");
    checkArray(arr, 1, 4, 7, "X");
    checkArray(arr, 2, 5, 8, "X");
    checkArray(arr, 0, 4, 8, "X");
    checkArray(arr, 6, 4, 2, "X");

    checkArray(arr, 0, 1, 2, "O");
    checkArray(arr, 3, 4, 5, "O");
    checkArray(arr, 6, 7, 8, "O");
    checkArray(arr, 0, 3, 6, "O");
    checkArray(arr, 1, 4, 7, "O");
    checkArray(arr, 2, 5, 8, "O");
    checkArray(arr, 0, 4, 8, "O");
    checkArray(arr, 6, 4, 2, "O");
  }

  function checkArray(arr, num1, num2, num3, player) {
    if (arr[num1] == player && arr[num2] == player && arr[num3] == player) {
        turn.textContent = `Player ${player} Won!`;
        turnCount = 0;
    }
  }
  