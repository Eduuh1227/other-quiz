let tema = "claro"

const botaoTema = document.querySelector(".tema button")
botaoTema.addEventListener("click", trocarTema)

function trocarTema() {
    if (localStorage.getItem("tema")) {
        tema = localStorage.getItem("tema")
 }

    const body = document.querySelector("body")

    if (tema === "claro") {
        body.classList.add("escuro")
        localStorage.setItem("tema", "escuro")
    }
}