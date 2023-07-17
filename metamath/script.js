// Set initial amount of meta
let metaAmount = 3;

// Resources object with names and amounts
const resources = {
  phi: { name: "Phi", amount: 0 },
  psi: { name: "Psi", amount: 0 },
  chi: { name: "Chi", amount: 0 },
  not: { name: "Not", amount: 0 },
  imply: { name: "Imply", amount: 0 }
};

// Update meta count on the page
function updateMetaCount() {
  const metaCountElement = document.getElementById("meta-amount");
  metaCountElement.textContent = metaAmount;
}

// Increase meta count when an item is purchased
function purchaseItem(cost, resource) {
  if (metaAmount >= cost) {
    metaAmount -= cost;
    updateMetaCount();
    resources[resource].amount++;
    showMessage(`${resources[resource].name} purchased successfully!`, "success");
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
    const resourceName = item.querySelector(".name").textContent.toLowerCase();
    item.addEventListener("click", function () {
      const costElement = this.querySelector(".cost");
      const cost = parseInt(costElement.textContent);
      purchaseItem(cost, resourceName);
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