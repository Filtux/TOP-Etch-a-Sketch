let gridContainer = document.querySelector(".grid-container");
let slider = document.querySelector("#sliderRange");
let output = document.querySelector("#sliderValue")
let resetButton = document.querySelector(".button-reset");  

function createGrid(gridSize) {

    resetGrid();

    squareSize = 100 / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        square = document.createElement("div")
        square.className = 'grid-square';
        square.style.width = squareSize + "%";
        square.style.height = squareSize + "%";
        gridContainer.appendChild(square);
        square.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "orange";
        });
    }
}

function resetGrid() {
    gridContainer.textContent = "";
}

slider.addEventListener("input", function() {
    output.textContent = slider.value;
    createGrid(slider.value);
});

resetButton.addEventListener("click", function() {  
    createGrid(slider.value);
});

createGrid(16);
output.textContent = slider.value;
