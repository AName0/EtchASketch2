const gridContainer = document.getElementById("grid-container");

function createGrid(numOfRows) {
    for (let i=0; i < numOfRows**2; i++) {
        let square = document.createElement("div");
        gridContainer.appendChild(square);
    }
}

createGrid(16);