let prompt = require("prompt-sync")()

let produto = prompt("Informe o produto: ")
let etiquetas = Number(prompt("Número de etiquetas: "))

for(let i = 1; i <= etiquetas / 2; i ++) {
    console.log(`${produto}   ${produto}`)
}

if(etiquetas % 2 != 0) {
    console.log(produto)
}