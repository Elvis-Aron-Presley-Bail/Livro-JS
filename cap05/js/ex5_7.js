const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numeros = Number(frm.numero.value)
    let acumulador = ''
    
    for(let i = 1; i <= numeros; i++) {
        if(i % 2 == 1) {
            acumulador = acumulador + "*"
        } else {
            acumulador = acumulador + "_"
        }
    }

    res.textContent = acumulador

})