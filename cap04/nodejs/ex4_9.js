const prompt = require("prompt-sync")()

const valor = Number(prompt("Insira um valor maior que 100: "))

if(valor < 100 || valor > 999) {
    console.log("Digite um valor maior que 100 e menor que 1000")
    return
}

let centena = Math.floor(valor / 100)

let dezena = Math.floor((valor - (centena * 100)) / 10)

let unidade = valor - ((centena * 100) + (dezena * 10))

console.log(`Invertido: ${unidade}${dezena}${centena}`)