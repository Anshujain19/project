// Placeholder function for redeeming points
function redeemPoints() {
    alert("Redeeming points...");
    window.location.assign('front.html')
    // Add your actual redemption logic here
}

// Simulate points display (replace with actual logic)
function updatePointsDisplay(points) {
    document.getElementById("points-display").textContent = points;
}

// Initial points display
updatePointsDisplay(100); // Example: User has 100 points
