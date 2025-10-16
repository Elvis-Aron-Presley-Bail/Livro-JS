const prompt = require("prompt-sync")()

const valor = Number(prompt("Informe o valor: "))
const vezes = Number(prompt("Informe a quantia de parcelas: "))

const valorParcelas = Math.floor(valor / vezes)
const valorFinal = valorParcelas + (valor % vezes)

for(let i = 1; i < vezes; i++) {
    console.log(`${i} parcela: R$${valorParcelas.toFixed(2)}`)
}

console.log(`${vezes} parcela: R$${valorFinal.toFixed(2)}`)