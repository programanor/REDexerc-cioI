var setaEsquerda = window.document.getElementById("setaEsquerda")
var cardLeonardo = window.document.getElementById("cardLeonardo")
var cardSamantha = window.document.getElementById("cardSamantha")
var cardBruna = window.document.getElementById("cardBruna")
var setaDireita = window.document.getElementById("setaDireita")

function movieDireira(){
    cardLeonardo.style ="display:none"
    cardBruna.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style = "display:flex"


}
function movieEsquerda(){
    cardBruna.style ="display:none"
    cardLeonardo.style ="display:flex"
    setaDireita.style ="display:flex"
    setaEsquerda.style ="display:none"




}