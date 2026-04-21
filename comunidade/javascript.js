function atualizarDataHora() {
    const agora = new Date();

    const opcoes = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    document.getElementById("data-hora").innerText =
        agora.toLocaleDateString("pt-BR", opcoes);
}

const track = document.querySelector(".carrossel-track");
const slides = document.querySelectorAll(".slide");

let index = 0;

function trocarSlide() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }

    track.style.transform = `translateX(-${index * 100}%)`;
}

// troca sozinho a cada 10 segundos
setInterval(trocarSlide, 10000);