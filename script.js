const board = document.querySelector(".board");
const body = document.querySelector("body");
const selectBtn = document.querySelector("#select");
const redBtn = document.querySelector("#red");
const blackBtn = document.querySelector("#black");
const rainbowBtn = document.querySelector("#rainbow");
const resetBtn = document.querySelector("#reset");



function createRow(size) {
    for (i=0; i<size; i++) {
        row = document.createElement("div");
        row.classList.add("row");
        board.appendChild(row);
    }
    createBox(size);
}

function createBox(size) {
    rows = document.querySelectorAll(".row");
    console.log(rows);
    rows.forEach(row => {
        for (i=0; i<size; i++) {
            box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
    });
}

function changeSize() {
    size = prompt("choose a new size between 0 and 100");
    deleteBoard();
    createRow(size);
}
    
function deleteBoard() {
    while (board.firstChild) {
       board.firstChild.remove();
    }
}

function resetBoard() {
    deleteBoard();
    createRow(32);
}

createRow(32);
selectBtn.addEventListener('click', changeSize);
resetBtn.addEventListener('click', resetBoard);