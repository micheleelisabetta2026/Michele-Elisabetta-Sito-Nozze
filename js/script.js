/* ==========================================
   Michele & Elisabetta
   Versione 3.0
========================================== */

var dataMatrimonio = new Date("September 10, 2026 15:00:00").getTime();

function aggiornaCountdown() {

    var countdown = document.getElementById("countdown");

    if (!countdown) {
        return;
    }

    var adesso = new Date().getTime();

    var differenza = dataMatrimonio - adesso;

    if (differenza <= 0) {

        countdown.innerHTML = "<strong>💖 Oggi è il nostro matrimonio! 💖</strong>";

        return;
    }

    var giorni = Math.floor(differenza / (1000 * 60 * 60 * 24));

    var ore = Math.floor((differenza % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    var minuti = Math.floor((differenza % (1000 * 60 * 60)) / (1000 * 60));

    var secondi = Math.floor((differenza % (1000 * 60)) / 1000);

    countdown.innerHTML =
        "<strong>" + giorni + "</strong> giorni &nbsp;•&nbsp;" +
        "<strong>" + ore + "</strong> ore &nbsp;•&nbsp;" +
        "<strong>" + minuti + "</strong> minuti &nbsp;•&nbsp;" +
        "<strong>" + secondi + "</strong> secondi";

}

document.addEventListener("DOMContentLoaded", function () {

    aggiornaCountdown();

    setInterval(aggiornaCountdown, 1000);

});