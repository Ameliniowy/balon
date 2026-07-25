const balloon = document.getElementById("balloon");

function fly() {

    balloon.style.transition = "none";

    balloon.style.bottom = "-900px";

    balloon.offsetHeight;

    // Trzy możliwe trasy
    const positions = ["45%", "50%", "55%"];

    // Losowanie jednej z tras
    const randomPosition =
        positions[Math.floor(Math.random() * positions.length)];

    balloon.style.left = randomPosition;
    balloon.style.transform = "translateX(-50%)";

    // Czas lotu
    balloon.style.transition = "bottom 10s linear";

    balloon.style.bottom = "110%";

}

fly();

// Powtarzanie co 35 sekund
setInterval(fly, 35000);
