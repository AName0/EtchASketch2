const GRID_SPACE = 600;
const grid = document.getElementById("grid");
const body = document.querySelector("body");
const normalModeButton = document.querySelector(".normal");
const randomModeButton = document.querySelector(".random");
const eraserButton = document.querySelector(".eraser");
let colorPicker = document.getElementById("pencil-color");
let gridSizeText = document.getElementById("grid-size-text");
let gridSizeSlider = document.getElementById("grid-size-slider");
let mouseIsDown;
let pencilColor = "rgba(0, 0, 0)"
let isNormalMode = true;
let isRandomMode = false;
let isEraserMode = false;;

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

function generateRandomColor() {
    let RGB1 = Math.floor(Math.random() * 256);
    let RGB2 = Math.floor(Math.random() * 256);
    let RGB3 = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + RGB1 + ", " + RGB2 + ", " + RGB3 + ")";
    return randomColor;
}

function colorSquares(e) {
    if (mouseIsDown === true) {
        if (isNormalMode === true) {
            e.target.style.backgroundColor = pencilColor;
        } else if (isRandomMode === true) {
            e.target.style.backgroundColor = generateRandomColor();
        } else if (isEraserMode === true) {
            e.target.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
    }
}

body.addEventListener("mousedown", function (e) {
    mouseIsDown = true;
})

body.addEventListener("mouseup", function (e) {
    mouseIsDown = false;
})

gridSizeSlider.oninput = function() {
    grid.innerHTML = "";
    createGrid(this.value);
    gridSizeText.textContent = `Grid Size: ${this.value}`;
}

colorPicker.oninput = function() {
    pencilColor = this.value;
}

normalModeButton.addEventListener("click", () => {
    if(isNormalMode === true) {
        return;
    } else {
        isNormalMode = true;
        isRandomMode = false;
        isEraserMode = false;
    }
})

randomModeButton.addEventListener("click", () => {
    if(isRandomMode === true) {
        return;
    } else {
        isNormalMode = false;
        isRandomMode = true;
        isEraserMode = false;
    }
})

eraserButton.addEventListener("click", () => {
    if(isEraserMode === true) {
        return;
    } else {
        isNormalMode = false;
        isRandomMode = false;
        isEraserMode = true;
    }
})

createGrid(16);