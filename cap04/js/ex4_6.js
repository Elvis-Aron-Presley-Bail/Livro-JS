const frm = document.querySelector("form")
const cem = document.querySelector("#cem")
const cinquenta = document.querySelector("#cinquenta")
const dez = document.querySelector("#dez")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const saque = Number(frm.valor.value)

    if(saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10,50, 100)")
        frm.valor.focus()
        return
    }

    const notasCem = Math.floor(saque / 100)
    let resto = saque % 100

    const notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50

    const notaDez = Math.floor(resto / 10)

    if(notasCem > 0) {
        cem.textContent = `Notas de R$ 100: ${notasCem}`
    }
    if(notasCinquenta > 0) {
        cinquenta.textContent = `Notas de R$ 50: ${notasCinquenta}`
    }
    if(notaDez > 0) {
        dez.textContent = `Notas de R$ 10: ${notaDez}`
    }

})