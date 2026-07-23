const nome = "Dario"; /*nao modifica o valor usando const*/
let age = 24; /*modifique o valor usando let*/

let msg = (`Ola ${nome}, voce tem ${age} anos.`)
console.log(msg)

if(age >= 18){
    console.log("Voce é maior de idade!")
}
else {
    console.log("Voce é menor de idade!")
}

console.log(typeof nome)
let pessoa = {
    nome: "Dario",
    idade: 24,
    pais: "Brasil"
}

console.log(pessoa)
let lista = ["Dario", "Joao", "Maria", "Jose"]
console.log(lista)
/*---------------------------------------*/
let paragrafo = document.querySelector("#para1")
paragrafo.addEventListener("click", trocaTexto)

function trocaTexto(){
    paragrafo.innerHTML = "Texto alterado!"
    paragrafo.style.background = "yellow"
}
