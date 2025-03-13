const board = document.getElementById("board");
const squares = 800; // Total squares
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F39C12", "#8E44AD", "#E74C3C"];

for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        square.style.backgroundColor = randomColor;

        setTimeout(() => {
            square.style.backgroundColor = "#ddd";
        }, 1000);
    });

    board.appendChild(square);
}
