const frm = document.querySelector("form")
const res = document.querySelector("#res")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let numero = Number(frm.numero.value)
    let anos = frm.anos.value

    let acumulador = ''

    for(let i = 1; i <= anos; i++) {
        let numChinchila = numero * 3
        acumulador = acumulador + `${i}* Ano: ${numChinchila} Chinchilas \n`
    }

    res.textContent = acumulador

})