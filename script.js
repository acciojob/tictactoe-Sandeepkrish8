let player1 = "";
let player2 = "";
let currentPlayer = "";
let currentSymbol = "X";
let gameOver = false;

const winPatterns = [
  ["1","2","3"],
  ["4","5","6"],
  ["7","8","9"],
  ["1","4","7"],
  ["2","5","8"],
  ["3","6","9"],
  ["1","5","9"],
  ["3","5","7"]
];

document.getElementById("submit").addEventListener("click", () => {
  player1 = document.getElementById("player-1").value;
  player2 = document.getElementById("player-2").value;

  if (!player1 || !player2) return;

  currentPlayer = player1;
  document.querySelector(".message").textContent = `${currentPlayer}, you're up`;

  document.getElementById("form").style.display = "none";
  document.querySelector(".board").style.display = "grid";
});

document.querySelectorAll(".cell").forEach(cell => {
  cell.addEventListener("click", () => {
    if (cell.textContent || gameOver) return;

    cell.textContent = currentSymbol;

    if (checkWinner()) {
      document.querySelector(".message").textContent =
        `${currentPlayer}, congratulations you won!`;
      gameOver = true;
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

  document.querySelector(".message").textContent = `${currentPlayer}, you're up`;
}

function checkWinner() {
  return winPatterns.some(pattern =>
    pattern.every(id =>
      document.getElementById(id).textContent === currentSymbol
    )
  );
}
