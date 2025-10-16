const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let fruta = frm.fruta.value
    let numero = frm.numero.value

    let acumulador = ''

    for(let i = 1; i <= numero - 1; i++) {
        acumulador = acumulador + fruta + " * "
    }

    acumulador = acumulador + fruta

    res.textContent = acumulador

})