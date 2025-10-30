const frm = document.querySelector("form")
const erros = document.querySelector("#erros")
const chances = document.querySelector("#chances")

let numeroMisterioso = (Math.random() * 100).toFixed(0)

let dica = document.querySelector("#dica")
dica.textContent = `É um número entre 1 e 100`

let numeroFalado = []
let contadorErros = 0
let contarChances = 6

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let numero = Number(frm.numero.value)

    if(numeroFalado.includes(numero)) {
        alert("Você já falou este número!")
        return
    }
    
    numeroFalado.push(numero)

    contadorErros++
    contarChances--

    if(contarChances == 0) {
        alert("Você não adivinhou o Número. Fim de Jogo.")
        alert(`O número era: ${numeroMisterioso}`)
        location.reload()
    }

    if(numero > numeroMisterioso) {
        dica.textContent = `É um número menor que ${numero}`
    } else if(numero == numeroMisterioso) {
        alert(`Parabens! Você acertou ! O número era ${numeroMisterioso}`)
        location.reload()
    } else {
        dica.textContent = `É um número maior que ${numero}`
    }

    erros.textContent = contadorErros
    chances.textContent = contarChances

    frm.numero.value = ''
    frm.numero.focus()

})