const width = 960;
const height = 960;
const container = document.querySelector(".container")

// Create 16 square divs
for (let i = 0; i < 32; i++) {
    const square = document.createElement("div");
    square.classList.add("square")
    container.appendChild(square)
}