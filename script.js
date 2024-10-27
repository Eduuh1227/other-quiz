 const botoesAssunto = document.querySelectorAll(".assuntos button")
   botoesAssunto.forEach(botao =>{
   botao.addEventListener("click", selecionarAssunto)
 })

   function selecionarAssunto(evento) {
      const classeBotao = evento.target.className
      const assunto = document.querySelector(`.${classeBotao} span`).innerText
      localStorage.setItem("assunto", assunto)
      window.location.href = "./pages/quiz/quiz.html"
 }