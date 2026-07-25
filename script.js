const balloon = document.getElementById("balloon");

function fly() {

    balloon.style.transition = "none";

    balloon.style.bottom = "-900px";

    balloon.offsetHeight;

    // szerokość balonu
    const balloonWidth = 350;

    // maksymalna pozycja X
    const maxX = window.innerWidth - balloonWidth;

    // losowa pozycja
    const x = Math.random() * maxX;

    balloon.style.left = x + "px";

    balloon.style.transition = "bottom 12s linear";

    balloon.style.bottom = "110%";

}

fly();

setInterval(fly, 90000);