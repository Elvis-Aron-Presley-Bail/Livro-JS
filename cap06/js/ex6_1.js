const frm = document.querySelector("form")
const respNome = document.querySelector("#respNome")
const respLista = document.querySelector("#respLista")

const lista = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.paciente.value

    lista.push(nome)

    let listaNomes = ''

    lista.forEach((nomeLista , i) => {
        
        listaNomes += `${i+1}. ${nomeLista} \n`

    });

    respLista.textContent = listaNomes

    frm.paciente.value = ''
    frm.paciente.focus()

})