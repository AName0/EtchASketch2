const GRID_SPACE = 800;
const grid = document.getElementById("grid");
const body = document.querySelector("body");
let mouseIsDown;

function createGrid(numOfRows) {
    for (let i=0; i < numOfRows**2; i++) {
        let square = document.createElement("div");
        square.className = "square";
        square.style.width = `${GRID_SPACE / numOfRows}px`;
        square.style.height = `${GRID_SPACE / numOfRows}px`;
        square.style.outline = "1px solid black";
        square.addEventListener("mouseover", colorSquares);
        grid.appendChild(square);
    }
}

function colorSquares(e) {
    if (mouseIsDown == true) {
        e.target.style.backgroundColor = "black";
    }
}

body.addEventListener("mousedown", function (e) {
    mouseIsDown = true;
})

body.addEventListener("mouseup", function (e) {
    mouseIsDown = false;
})

createGrid(16);