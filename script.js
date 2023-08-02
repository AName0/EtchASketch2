const GRID_SPACE = 800;
const grid = document.getElementById("grid");

function createGrid(numOfRows) {
    for (let i=0; i < numOfRows**2; i++) {
        let square = document.createElement("div");
        square.className = "square";
        square.style.width = `${GRID_SPACE / numOfRows}px`;
        square.style.height = `${GRID_SPACE / numOfRows}px`;
        square.style.outline = "1px solid black";
        grid.appendChild(square);
    }
}

createGrid(16);