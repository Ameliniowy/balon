const balloon = document.getElementById("balloon");

function fly() {

    // Reset pozycji
    balloon.style.transition = "none";
    balloon.style.bottom = "-350px";

    // Wymuszenie odświeżenia animacji
    balloon.offsetHeight;

    // Trzy możliwe pozycje (środek ±5%)
    const positions = [45, 50, 55];
    const random = positions[Math.floor(Math.random() * positions.length)];

    balloon.style.left = random + "%";
    balloon.style.transform = "translateX(-50%)";

    // Lot 12 sekund
    balloon.style.transition = "bottom 12s linear";
    balloon.style.bottom = "110%";
}

// Pierwszy lot
fly();

// Kolejne loty co 35 sekund
setInterval(fly, 35000);
