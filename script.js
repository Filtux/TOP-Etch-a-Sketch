gridContainer = document.querySelector(".grid-container");
gridSize = 16
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

let slider = document.querySelector("#sliderRange");
let output = document.querySelector("#sliderValue")
output.innerHTML = slider.value;

slider.addEventListener("input", function() {
    output.innerHTML = this.value;
});