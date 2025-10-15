const prompt = require("prompt-sync")()

const inicio = 1930



do{

    let numero = Number(prompt("Digite o ano: "))

    if(numero == 0) {
        break
    }

    for(let i = inicio; i <= numero; i = i + 4) {
        if(i == numero) {
            console.log("Foi ano de copa")
        } else {
            console.log("Não foi ano de copa")
        }
    }


} while(true)