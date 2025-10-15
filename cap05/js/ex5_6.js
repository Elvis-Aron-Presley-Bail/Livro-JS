const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let numero = Number(frm.numero.value)
    let contador = 0

    for(let i = 1; i <= numero; i++) {
        if(numero % i == 0)
            contador++
    }

    if(contador == 2) {
        res.textContent = `${numero} É primo`
    } else {
        res.textContent = `${numero} Não é primo`
    }

})