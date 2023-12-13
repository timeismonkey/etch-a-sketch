const container = document.querySelector(".container")
const width = container.offsetWidth;
const height = container.offsetHeight;

// Create 32 square divs
for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square")
    container.appendChild(square)
}

// Style each div to take up an equal amount of space in container
const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    let length = height / 16;
    length = length.toString() + "px";
    square.style.height = length;
    square.style.width = length;
})