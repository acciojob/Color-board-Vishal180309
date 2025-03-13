//your JS code here. If required.
// Get the container element
const container = document.querySelector('.container');

// Function to create a square element
function createSquare() {
    const square = document.createElement('div');
    square.className = 'square';
    return square;
}

// Function to add event listener to the square element
function addEventListenerToSquare(square) {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
    });

    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = '#fff';
    });
}

// Function to create and add squares to the container
function createAndAddSquares() {
    for (let i = 0; i < 800; i++) {
        const square = createSquare();
        addEventListenerToSquare(square);
        container.appendChild(square);
    }
}

// Create and add squares to the container
createAndAddSquares();
