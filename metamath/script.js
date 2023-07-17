let meta = 0;

function updateGame() {
    document.getElementById("meta-amount").textContent = meta;
    // Generate and update purchasable items dynamically

    // Example item:
    const itemHTML = `
        <div class="item">
            <p>Item Name</p>
            <p>Cost: 10 Meta</p>
            <button onclick="purchaseItem()">Purchase</button>
        </div>
    `;
    document.getElementById("resources").innerHTML += itemHTML;
}

function purchaseItem() {
    // Handle item purchase logic
}

updateGame();
