let boxes = document.querySelectorAll(".box");
let resetgame = document.getElementById("resetbtn");
let newgamebtn = document.getElementById("newgamebtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerx,palyer o

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [3, 5, 7]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}


const checkwinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showwinner(pos1Val);
                disableboxes(); // added this
            }
        }
    }
};

const resetbtn = () => {
    // console.log("reset");
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");

};

newgamebtn.addEventListener("click", resetbtn);
resetgame.addEventListener("click", resetbtn);
