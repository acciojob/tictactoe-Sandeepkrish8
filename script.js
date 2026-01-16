//your JS code here. If required.
let player1 = "";
let player2 = "";
let currentPlayer = "";
let currentSymbol = "X";
let gameActive = true;

const winningPatterns = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"],
];

document.getElementById("submit").addEventListener("click", () => {
  player1 = document.getElementById("player-1").value;
  player2 = document.getElementById("player-2").value;

  if (!player1 || !player2) return;

  currentPlayer = player1;

  document.getElementById("player-form").style.display = "none";
  document.getElementById("game").style.display = "block";

  updateMessage();
});

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.textContent || !gameActive) return;

    cell.textContent = currentSymbol;

    if (checkWinner()) {
      document.querySelector(".message").textContent =
        `${currentPlayer} congratulations you won!`;
      gameActive = false;
      return;
    }

    switchTurn();
  });
});

function switchTurn() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
    currentSymbol = "O";
  } else {
    currentPlayer = player1;
    currentSymbol = "X";
  }
  updateMessage();
}

function updateMessage() {
  document.querySelector(".message").textContent =
    `${currentPlayer}, you're up`;
}

function checkWinner() {
  return winningPatterns.some((pattern) => {
    return pattern.every((id) => {
      return document.getElementById(id).textContent === currentSymbol;
    });
  });
}
