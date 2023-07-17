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
    showMessage("Item purchased successfully!", "success");
  } else {
    showMessage("Not enough meta to purchase this item!", "error");
  }
}

// Show pop-up message
function showMessage(message, type) {
  const popUp = document.createElement("div");
  popUp.className = `pop-up ${type}`;
  popUp.textContent = message;
  document.body.appendChild(popUp);

  // Remove the pop-up after a set time
  setTimeout(function () {
    popUp.remove();
  }, 2000);
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