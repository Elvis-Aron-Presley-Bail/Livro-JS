const frm = document.querySelector("form")
const numeroLista = document.querySelector("#numerosLista")
const conclusao = document.querySelector("#conclusao")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let numero = Number(frm.numero.value)

    let acumulador = ''
    let contador = 0


    for(let i = 1; i <= numero / 2; i++) {

        if(numero % i == 0) {
            acumulador = acumulador + i + ','
            contador = contador + i
        }

    }

    numeroLista.textContent = `Divisores do ${numero}: ${acumulador} (Soma: ${contador})`

    if(contador == numero) {
        conclusao.textContent = `${numero} é um Número Perfeito`
    } else {
        conclusao.textContent = `${numero} Não é um Número Perfeito`
    }

})