const btn = document.getElementById("btn");
const email = document.getElementById("Para-copiar")

function Copiar(){
    navigator.clipboard.writeText(email.innerHTML)
    window.alert("Email copiado com sucesso!")
}