//Aqui eu fiz um codigo simples para que aparece a msg de acordo com o horario que o úsuario acesse minha página)
function exibirSaudacao() {
    const saudacao = document.getElementById("saudacao");
    const horas = new Date().getHours();

    if (horas < 12) {
        saudacao.textContent = "Bom dia!";
    } else if (horas < 18) {
        saudacao.textContent = "Boa tarde!";
    } else {
        saudacao.textContent = "Boa noite!";
    }
}

exibirSaudacao();
//Aqui eu termino meu codigo simples para que aparece a msg de acordo com o horario que o úsuario acesse minha página)


const botaoTema = document.getElementById("btn-tema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    botaoTema.textContent = isDarkMode ? "Tema Claro" : "Tema Escuro";
});
