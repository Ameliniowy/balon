const balloon = document.getElementById("balloon");

function fly() {

    balloon.style.transition = "none";

    balloon.style.bottom = "-900px";

    balloon.offsetHeight;

    // szerokość balonuconst balloon = document.getElementById("balloon");

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

// Powtarzanie co 45 sekund
setInterval(fly, 45000);
    const balloonWidth = 350;

    // maksymalna pozycja X
    const maxX = window.innerWidth - balloonWidth;

    // losowa pozycja
    const x = Math.random() * maxX;

    balloon.style.left = x + "px";

    balloon.style.transition = "bottom 12s linear";

    balloon.style.bottom = "110%";
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

// Powtarzanie co 30 sekund
setInterval(fly, 30000);
}

fly();

setInterval(fly, 30000);
