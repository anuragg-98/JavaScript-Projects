const buttons  = document.querySelectorAll(".box");
const mainTag = document.querySelector("main");
const resetBtn = document.querySelector("#reset-btn");
const newGameButton = document.querySelector("#newGame-btn");
const msg = document.querySelector("#msg");
const containerOfMsg = document.querySelector(".containerOfMsg");

let playerO = true;

let winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

buttons.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box is clicked.")
        if(playerO){
            box.innerText = "X";
            playerO = false;
        }
        else{
            box.innerText = "O";
            playerO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

function showWinner(winner){
    msg.innerText = `Congratulations, Player${winner} is Winner!`
    containerOfMsg.classList.remove("hideMsg");
    containerOfMsg.classList.remove("hideMsg");
    mainTag.classList.add("hideMsg");
};

function checkWinner(){
    for (let pattern of winningPatterns){
        let pos1Value = buttons[pattern[0]].innerText;
        let pos2Value = buttons[pattern[1]].innerText;
        let pos3Value = buttons[pattern[2]].innerText;

        if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                console.log("Winner!");
                showWinner(pos1Value);
            }
        }
    }

}
