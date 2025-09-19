const frm = document.querySelector("form")
const saida = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.numero.value)
    let raizQuadrada = Math.sqrt(numero)

    if(Number.isInteger(raizQuadrada)) {
        saida.textContent = `Raiz: ${raizQuadrada}`
    } else {
        saida.textContent = `Não há raiz exata para ${numero}`
    }

})