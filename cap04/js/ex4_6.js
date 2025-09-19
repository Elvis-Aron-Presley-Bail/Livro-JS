const frm = document.querySelector("form")
const cem = document.querySelector("#cem")
const cinquenta = document.querySelector("#cinquenta")
const dez = document.querySelector("#dez")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = frm.valor.value
    let notaCem = 0
    let notaCinquenta = 0
    let notaDez = 0

    if(valor > 100) {
        notaCem = valor / 100
    }

})