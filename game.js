let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;
let count = 0;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
    count=0;
  turno = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno === true) {
      box.innerText = "O";
      box.style.color="black";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    count++;

    let isWinner=checkWinners();
    if(count===9 && !isWinner)
    {
        gameDraw();
    }
  });

});
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const checkWinners = () => {
  for (pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

const gameDraw=()=>
{
    msg.innerText='Game Draw';
    msgContainer.classList.remove("hide");
    disableBoxes();
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
