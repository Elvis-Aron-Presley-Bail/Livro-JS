const frm = document.querySelector("form")
const listarTodos = document.querySelector("#listar")
const resumir = document.querySelector("#resumir")

let listaTxt = document.querySelector("pre")

let criancas = [{nome : "Lucas" , idade: 4 },
                {nome : "Ana" , idade: 3 },
                {nome : "Bianca" , idade: 6 },
                {nome : "Pedro" , idade: 6 },
                {nome : "João" , idade: 4 },
                {nome : "Mariana" , idade: 4 },
                {nome : "Juliana" , idade: 3 },
                {nome : "Cátia" , idade: 6 }]

let lista = criancas.reduce((acumulador , crianca) => 
    acumulador + 'Nome: ' + crianca.nome + ' || Idade: ' + crianca.idade + '\n', '')
                
listaTxt.textContent = lista

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let nomeCri = frm.nome.value
    let idadeCri = Number(frm.idade.value)

    criancas.push({nome : nomeCri , idade : idadeCri})

    let lista = criancas.reduce((acumulador , crianca) => 
        acumulador + 'Nome: ' + crianca.nome + ' || Idade: ' + crianca.idade + '\n', '')

    listaTxt.textContent = lista

})

listarTodos.addEventListener("click", () => {
    let lista = criancas.reduce((acumulador , crianca) => 
        acumulador + 'Nome: ' + crianca.nome + ' || Idade: ' + crianca.idade + '\n', '')

    listaTxt.textContent = lista
})

resumir.addEventListener("click", () => {

for(let i = 0; i < criancas.length; i++) {
    let filtrar = criancas.filter(crianca => crianca.idade == i)
}

})