// Get the necessary elements from the DOM
const decreaseButton = document.getElementById('decrease-button');
const resetButton = document.getElementById('reset-button');
const increaseButton = document.getElementById('increase-button');
const countElement = document.getElementById('count');

// Initialize the counter value
let count = 0;

// Function to update the counter value and display it
function updateCount() {
  countElement.textContent = count;
}

// Event listener for the decrease button
decreaseButton.addEventListener('click', () => {
  count--;
  updateCount();
});

// Event listener for the reset button
resetButton.addEventListener('click', () => {
  count = 0;
  updateCount();
});

// Event listener for the increase button
increaseButton.addEventListener('click', () => {
  count++;
  updateCount();
});

// Initial count display
updateCount();