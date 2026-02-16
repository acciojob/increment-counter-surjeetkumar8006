const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", function () {
    let currentValue = parseInt(counter.textContent);
    
    // Show alert with un-incremented value
    alert(currentValue);
    
    // Increment counter
    counter.textContent = currentValue + 1;
});
