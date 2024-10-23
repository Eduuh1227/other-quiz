const assunto = localStorage.getItem("assunto")

function alterarAssunto () {
  const divIcone = document.querySelector(".assunto_icone")
  const iconeImg = document.querySelector(".assunto_icone img")
  const assuntoTitulo = document.querySelector(".assunto h1")

  divIcone.classList.add(assunto.toLowerCase())
  iconeImg.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
  iconeImg.setAttribute("alt", `ícone de ${assunto}`)
  assuntoTitulo.innerText = assunto
}

alterarAssunto()