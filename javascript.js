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

setInterval(atualizarDataHora, 1000);
atualizarDataHora();