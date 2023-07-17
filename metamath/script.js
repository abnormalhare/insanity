// Set initial amount of meta
let metaAmount = 3;

// Update meta count on the page
function updateMetaCount() {
  const metaCountElement = document.getElementById("meta-amount");
  metaCountElement.textContent = metaAmount;
}

// Increase meta count when an item is purchased
function purchaseItem(cost) {
  if (metaAmount >= cost) {
    metaAmount -= cost;
    updateMetaCount();
    alert("Item purchased successfully!");
  } else {
    alert("Not enough meta to purchase this item!");
  }
}

// Event listener for purchasing the Phi item
const phiItem = document.getElementById("phi-item");
phiItem.addEventListener("click", function () {
  purchaseItem(2);
});

// Event listener for purchasing the Psi item
const psiItem = document.getElementById("psi-item");
psiItem.addEventListener("click", function () {
  purchaseItem(3);
});

// Event listener for purchasing the Chi item
const chiItem = document.getElementById("chi-item");
chiItem.addEventListener("click", function () {
  purchaseItem(4);
});

// Event listener for purchasing the Not item
const notItem = document.getElementById("not-item");
notItem.addEventListener("click", function () {
  purchaseItem(1);
});

// Event listener for purchasing the Imply item
const implyItem = document.getElementById("imply-item");
implyItem.addEventListener("click", function () {
  purchaseItem(2);
});

// Initialize the game
function initGame() {
  updateMetaCount();
}

// Start the game
initGame();