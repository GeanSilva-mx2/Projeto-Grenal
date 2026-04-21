function atualizarDataHora() {
    const agora = new Date();

    const data = agora.toLocaleDateString("pt-BR");
    const hora = agora.toLocaleTimeString("pt-BR");

    const elemento = document.getElementById("data-hora");

    if (elemento) {
        elemento.textContent = `${data} - ${hora}`;
    }
}

atualizarDataHora();
setInterval(atualizarDataHora, 1000);

const imagens = document.querySelectorAll(".foto img");
const lightbox = document.getElementById("lightbox");
const imgGrande = document.getElementById("img-grande");
const fechar = document.querySelector(".fechar");

if (imagens.length && lightbox && imgGrande && fechar) {
    imagens.forEach((img) => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            imgGrande.src = img.src;
            imgGrande.alt = img.alt || "Imagem ampliada da galeria";
            document.body.style.overflow = "hidden";
        });
    });

    fechar.addEventListener("click", () => {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target !== imgGrande) {
            lightbox.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            lightbox.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
}