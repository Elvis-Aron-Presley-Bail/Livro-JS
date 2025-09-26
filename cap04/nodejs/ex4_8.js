const prompt = require("prompt-sync")()

const valorCompra = Number(prompt("Valor da compra: "))
const parcela = Number(prompt("Informe o número de parcelas: "))

let parcelado = valorCompra / parcela

if(parcela > 6) {
    console.log("Parcelamos em no máximo 6 vezes")
} else if(parcelado < 20.00){
    console.log("O valor mínimo da parcela é R$20.00")
} else {
    console.log(`Pode pagar em ${parcela}x de R$:${parcelado.toFixed(2)}`)
}