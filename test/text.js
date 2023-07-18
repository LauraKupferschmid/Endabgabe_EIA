"use strict";
var text;
(function (text) {
    // Get the canvas element and its 2D rendering context
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    // Create the character object
    const character = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        width: 50,
        height: 50,
        speed: 5,
    };
    // Function to draw the character on the canvas
    function drawCharacter() {
        ctx.fillStyle = 'red';
        ctx.fillRect(character.x, character.y, character.width, character.height);
    }
    // Function to update the character's position based on keyboard input
    function updateCharacterPosition() {
        if (keys['w'])
            character.y -= character.speed;
        if (keys['s'])
            character.y += character.speed;
        if (keys['a'])
            character.x -= character.speed;
        if (keys['d'])
            character.x += character.speed;
    }
    // Handle keyboard input
    const keys = {};
    window.addEventListener('keydown', (e) => {
        keys[e.key.toLowerCase()] = true;
    });
    window.addEventListener('keyup', (e) => {
        keys[e.key.toLowerCase()] = false;
    });
    // Game loop
    function gameLoop() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Update character position
        updateCharacterPosition();
        // Draw the character
        drawCharacter();
        // Request the next frame
        requestAnimationFrame(gameLoop);
    }
    // Start the game loop
    gameLoop();
})(text || (text = {}));
//# sourceMappingURL=text.js.map