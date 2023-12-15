const container = document.querySelector(".container")
const width = container.offsetWidth;
const height = container.offsetHeight;
const squareCountButton = document.querySelector(".square-count");
const rainbowModeButton = document.querySelector(".rainbow-mode");


// Style each div to take up an equal amount of space in container
function makeSquares(squareCount) {
    container.innerHTML = "";
    let totalSquares = squareCount ** 2;
    // Create totalSquares divs
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square")
        // square.textContent = i
        container.appendChild(square)
    }

    // Style the width and height of squares
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        let length = height / squareCount;
        length = length.toString() + "px";
        square.style.height = length;
        square.style.width = length;
        // Add  default color change hover effect to squares
        square.addEventListener("mouseover", e => {
            changeColor(e);
        })
    })
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function changeColor(e) {
    let square = e.target;
    square.style.backgroundColor = "red";
}

function randomColor(e) {
    let square = e.target;
    let red = getRandomNumber(255)
    let green = getRandomNumber(255);
    let blue = getRandomNumber(255);
    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Default to 16x16 gird
makeSquares(16);

// Add event listener to square count button to prompt user for square count per side
squareCountButton.addEventListener("click", () => {
    let squareCount;
    do {
        squareCount = prompt("How many squares per side?")
    } while (parseInt(squareCount) > 100 || parseInt(squareCount) < 0);
    makeSquares(parseInt(squareCount));
});

// Add rainbow mode button event listener
rainbowModeButton.addEventListener("click", () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", e => randomColor(e));
    })
})