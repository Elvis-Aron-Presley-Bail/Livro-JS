const frm = document.querySelector("form")
const saida = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const hora = Number(frm.hora.value)

    let horaTotal = hora + 5

    let horaFra
    if(horaTotal > 24.00) {
        horaFra = horaTotal - 24.00
    }

    saida.textContent = `Hora na França: ${horaFra.toFixed(2)}`

})