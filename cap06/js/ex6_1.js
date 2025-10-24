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

frm.bUrgencia.addEventListener("click", () => {
    if(!frm.checkValidity()) {
        alert("Informe o nome do do paciênte a ser atendido em caráter de urgência")
        frm.paciente.focus()
        return
    }

    const nome = frm.paciente.value
    lista.unshift(nome)

    let listaNomes = ''

    lista.forEach((nomeLista , i) => {
        listaNomes += `${i+1}* ${nomeLista} \n`
    });

    respLista.textContent = listaNomes
    frm.paciente.value = ''
    frm.paciente.focus()

})

frm.bAtender.addEventListener("click", () => {

    if(lista.length == 0) {
        alert(`Todos os paciêntes já foram atendidos !`)
        frm.paciente.focus()
        return
    }

    const pacienteAgora = lista.shift()

    respNome.textContent = pacienteAgora

    let listaNomes = ''

    lista.forEach((nomeLista , i) => {
        listaNomes += `${i+1}* ${nomeLista} \n`
    });

    respLista.textContent = listaNomes

})