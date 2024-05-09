// Initialize the score
let score = 0;

// Get references to the elements
const scoreDisplay = document.getElementById('score');
const target = document.getElementById('target');
const gameContainer = document.getElementById('game-container');

// Function to generate a random position for the target within the game area
function randomPosition() {
    const containerWidth = gameContainer.clientWidth - target.clientWidth;
    const containerHeight = gameContainer.clientHeight - target.clientHeight;
    const randomX = Math.floor(Math.random() * containerWidth);
    const randomY = Math.floor(Math.random() * containerHeight);
    return { x: randomX, y: randomY };
}

// Function to move the target to a new random position
function moveTarget() {
    const { x, y } = randomPosition();
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
}

// Function to handle the click event on the target
function targetClicked() {
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
}

// Set up the initial target position and event listener
target.addEventListener('click', targetClicked);
moveTarget();
