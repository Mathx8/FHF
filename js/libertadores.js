function proximaRodada() {
    let rodada1 = document.getElementById('rodada1');
    let rodada2 = document.getElementById('rodada2');
    let rodada3 = document.getElementById('rodada3');
    let rodada4 = document.getElementById('rodada4');
    let rodada5 = document.getElementById('rodada5');
    let rodada6 = document.getElementById('rodada6');

    if (rodada1.style.display === "flex" || rodada1.style.display === "") {
        rodada1.style.display = "none";
        rodada2.style.display = "flex";
    } else if (rodada2.style.display === "flex") {
        rodada2.style.display = "none";
        rodada3.style.display = "flex";
    } else if (rodada3.style.display === "flex") {
        rodada3.style.display = "none";
        rodada4.style.display = "flex";
    } else if (rodada4.style.display === "flex") {
        rodada4.style.display = "none";
        rodada5.style.display = "flex";
    } else if (rodada5.style.display === "flex") {
        rodada5.style.display = "none";
        rodada6.style.display = "flex";
    } else if (rodada6.style.display === "flex") {
        rodada6.style.display = "none";
        rodada1.style.display = "flex";
    }
}

function voltarRodada() {
    let rodada1 = document.getElementById('rodada1');
    let rodada2 = document.getElementById('rodada2');
    let rodada3 = document.getElementById('rodada3');
    let rodada4 = document.getElementById('rodada4');
    let rodada5 = document.getElementById('rodada5');
    let rodada6 = document.getElementById('rodada6');

    if (rodada6.style.display === "flex" || rodada1.style.display === "") {
        rodada6.style.display = "none";
        rodada5.style.display = "flex";
    } else if (rodada5.style.display === "flex") {
        rodada5.style.display = "none";
        rodada4.style.display = "flex";
    } else if (rodada4.style.display === "flex") {
        rodada4.style.display = "none";
        rodada3.style.display = "flex";
    } else if (rodada3.style.display === "flex") {
        rodada3.style.display = "none";
        rodada2.style.display = "flex";
    } else if (rodada2.style.display === "flex") {
        rodada2.style.display = "none";
        rodada1.style.display = "flex";
    }
}

function iniciarAutoRotacao() {
    setInterval(proximaRodada, 7000);
}

window.onload = function () {
    iniciarAutoRotacao();
}