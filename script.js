// Function to handle game selection
function selectGame(event) {
    const card = event.currentTarget; // The clicked card element
    const gameId = card.getAttribute('data-game-id');
    alert(`You selected Game ID: ${gameId}`);
    // In a real application, you would add logic here to redirect the user or load the game
    // window.location.href = `game${gameId}.html`;
}

// Add event listeners to all game cards after the HTML is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('click', selectGame);
    });
});

