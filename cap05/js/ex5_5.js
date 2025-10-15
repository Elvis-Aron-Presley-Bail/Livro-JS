const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

let resposta = ''
let numContas = 0
let valTotal = 0

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao = frm.Descricao.value
    const valor = Number(frm.Valor.value)

    numContas++
    valTotal = valTotal + valor
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
    resp1.innerHTML = `${resposta} ------------------------------`
    resp2.innerHTML = `${numContas} Conta(S) - Total R$: ${valTotal.toFixed(2)}`

    frm.Descricao.value = ''
    frm.Valor.value = ''
    frm.Descricao.focus()

})