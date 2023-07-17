let meta = 0;

function updateGame() {
    document.getElementById("meta-amount").textContent = meta;
}

function purchaseItem() {
    const cost = 10;
    if (meta >= cost) {
        // Deduct the cost from meta
        meta -= cost;

        // Handle the item purchase logic
        // ...

        // Update the game display
        updateGame();
    }
}