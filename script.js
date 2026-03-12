document.addEventListener("DOMContentLoaded", function () {

    const botoes = document.querySelectorAll(".categorias a");
    const cards = document.querySelectorAll(".card");

    botoes.forEach(botao => {

        botao.addEventListener("click", function (e) {

            e.preventDefault();

            const filtro = this.getAttribute("data-filtro");

            cards.forEach(card => {

                const categoria = card.getAttribute("data-categoria");

                if (filtro === "todos" || filtro === categoria) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    });

});