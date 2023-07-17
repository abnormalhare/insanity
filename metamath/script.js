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
// Calculate and set the width of the meta container dynamically
function updateMetaContainerWidth() {
    const itemContainerWidth = document.querySelector(".item-container").offsetWidth;
    const itemCount = document.querySelectorAll("#variable-syntax-container .item-container").length;
    const marginTotal = (itemCount - 1) * 2; // Assuming 2px margin on both sides of each item container
    const metaContainerWidth = itemContainerWidth * itemCount + marginTotal;
    document.getElementById("meta-container").style.width = metaContainerWidth + "px";
}

// Call the function initially and whenever the window is resized
updateMetaContainerWidth();
window.addEventListener("resize", updateMetaContainerWidth);