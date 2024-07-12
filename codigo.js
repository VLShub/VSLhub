let fotosMarcadas = 0;

function marcar(evt) {
    if(evt.target.dataset.marcada == undefined || evt.target.dataset.marcada == "false") {
        evt.target.style.filter = "sepia()";
        evt.target.dataset.marcada = true;
        fotosMarcadas++;
    } else {
        evt.target.style.filter = "";
        evt.target.dataset.marcada = false;
        fotosMarcadas--;
    }
    document.getElementById("marcadas").innerText = fotosMarcadas;
}

const fotos = document.querySelectorAll("#fotos img")
for (const foto of fotos) {
    foto.addEventListener("click", marcar);
}