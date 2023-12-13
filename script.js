const container = document.querySelector(".container")
const width = container.offsetWidth;
const height = container.offsetHeight;
const squareCountButton = document.querySelector(".square-count");


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
    })
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