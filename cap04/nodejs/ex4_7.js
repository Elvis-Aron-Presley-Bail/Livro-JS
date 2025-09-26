const prompt = require("prompt-sync")()
const pessoas = Number(prompt("Número de pessoas: "))
const peixes = Number(prompt("Número de peixes: "))
const peixesExtras = peixes - pessoas
let pagar

if(peixes <= pessoas) {
    pagar =  pessoas * 20
} else {
    pagar = (pessoas * 20) + (peixesExtras * 12)
}

console.log(`Pessoas: ${pessoas}`)
console.log(`Peixes: ${peixes}`)
console.log(`Valor a pagar: ${pagar}`)