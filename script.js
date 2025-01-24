
const container = document.querySelector("#container");

function createGrid(size) {
    for (i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
    }
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("pointerenter", () => {
            square.style.backgroundColor = "black";
        });
    });
}

createGrid(16);

const newBtn = document.querySelector("#new");
newBtn.addEventListener("click", () => {
    num = +prompt("Grid size (1 - 100)?");
    if (!Number.isInteger(num) || num <= 0) {
        alert("Enter a valid number");
    } else if (num > 100) {
        alert("Must be between 1 and 100.");
    } else {
        container.replaceChildren();
        createGrid(num);
    }
});
