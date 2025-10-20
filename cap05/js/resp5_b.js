const frm = document.querySelector("form")
const res = document.querySelector("#res")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let numero = Number(frm.numero.value)
    let anos = frm.anos.value

    let acumulador = ''
    let contador = numero
    let primeiroAno = `1* Ano: ${numero} Chinchilas \n`

    for(let i = 2; i <= anos; i++) {

        contador = contador * 3
    
        acumulador = acumulador + `${i}* Ano: ${contador} Chinchilas \n`
    }

    res.textContent = primeiroAno + acumulador

})