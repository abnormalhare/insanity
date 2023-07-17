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

// Set event listeners for the resources
function setResourceEventListeners() {
  const resourceItems = document.querySelectorAll("#resources .item-container");
  resourceItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const costElement = this.querySelector(".cost");
      const cost = parseInt(costElement.textContent);
      purchaseItem(cost);
    });
  });
}

// Initialize the game
function initGame() {
  updateMetaCount();
  setResourceEventListeners();
}

// Start the game
initGame();