const balloon = document.getElementById("balloon");

function fly() {

    balloon.style.transition = "none";

    balloon.style.bottom = "-900px";

    balloon.offsetHeight;

    // trzy możliwe trasy
    const positions = [40, 50, 60];

    const random =
        positions[Math.floor(Math.random() * positions.length)];

    balloon.style.left = random + "%";

    balloon.style.transition = "bottom 10s linear";

    balloon.style.bottom = "110%";

}

// pierwszy lot
fly();

// następne loty co 30 sekund
setInterval(fly, 30000);
