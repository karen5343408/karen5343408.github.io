let botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", mostrar_mensagem);

function mostrar_mensagem() {
    mensagem.innerHTML = "''Que bom viver, como é bom sonhar </br> E o que ficou pra trás passou e eu não me importei </br> Foi até melhor, tive que pensar em algo novo que fizesse sentido </br> - Charlie Brown Jr. (Lugar ao Sol)''"
}
