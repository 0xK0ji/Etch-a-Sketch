const board = document.querySelector(".board");
const body = document.querySelector("body");
const selectBtn = document.querySelector("#select");
const resetBtn = document.querySelector("#reset");
const box = document.querySelectorAll(".box")
const colorBtn = document.querySelectorAll(".color-btn");


function randomize() {
    Math.floor(Math.random() * 256)
}


function createRow(size) {
    for (i=0; i<size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        board.appendChild(row);
    }
    createBox(size);
}

function createBox(size) {
    let rows = document.querySelectorAll(".row");
    console.log(rows);
    rows.forEach(row => {
        for (i=0; i<size; i++) {
            let box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
    });
}

function changeSize() {
    let size = prompt("choose a new size between 0 and 100");
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

function setColor(color) {
    board.addEventListener('mouseover', (e) => {
        if (color === 'rainbow') {
            e.target.style.backgroundColor = `rgb(${randomize()},${randomize()},${randomize()})`;
        } else {
            e.target.style.backgroundColor = `${color}`;
        }
});
}

function randomize() {
    return Math.floor(Math.random() * 256);
}

createRow(32);
selectBtn.addEventListener('click', changeSize);
resetBtn.addEventListener('click', resetBoard);

colorBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        let target = e.target        
        setColor(target.id);
    })}
);




