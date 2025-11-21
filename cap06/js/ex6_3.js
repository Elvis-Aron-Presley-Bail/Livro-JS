const frm = document.querySelector("form")
const listarTodos = document.querySelector("#listarTodos")
const filtrarPreco = document.querySelector("#filtrarPreco")
const simularPromocao = document.querySelector("#simularPromocao")

let subtitulo = document.querySelector("h3")

let carros = [{modelo : 'Sandero' , preco : 32900.00 },
              {modelo : 'Celta' , preco : 19500.00 },
              {modelo : 'Palio' , preco : 26800.00 },
              {modelo : 'Fusca' , preco : 12500.00 },
              {modelo : 'Fiesta' , preco : 23000.00 },
              {modelo : 'Gol' , preco : 24300.00 }]

let listaTxt = document.querySelector("#lista")
              
let lista = carros.reduce((acumulador,carro) => 
    acumulador + carro.modelo + carro.preco + '\n', '')

listaTxt.textContent = lista

frm.addEventListener("submit", (e) => {
    e.preventDefault()


    alert('Adicionado')

    const novoModelo = frm.modelo.value
    const novoPreco = Number(frm.preco.value)
    carros.push({modelo : novoModelo , preco : novoPreco})

    frm.modelo.value = ''
    frm.preco.value = ''

})

listarTodos.addEventListener("click", () => {
    const lista = carros.reduce((acumulador , carro) => 
        acumulador + carro.modelo + carro.preco + '\n', '')
    listaTxt.textContent = lista
})

simularPromocao.addEventListener('click', () => {
    const pedido = Number(prompt("Digite a taxa de desconto: "))

    let desconto = carros.map(carro => ({preco : carro.preco - ((carro.preco * pedido) / 100) , modelo : carro.modelo }))

    if(pedido > 100 || pedido < 1) {
        alert("Desconto deve ser entre 1% e 99%")
        return
    }

    let lista = desconto.reduce((acumulador,carro) => 
    acumulador + carro.modelo + carro.preco + '\n' , '')

    listaTxt.textContent = lista

})

filtrarPreco.addEventListener('click', () => {
    const filtro = prompt("Qual o valor máximo?")
    const filtrado = carros.filter(carro => carro.preco <= filtro)
    const lista = filtrado.reduce((acumulador,carro) => 
    acumulador + carro.modelo + carro.preco + '\n', '')
    console.log(lista)

    if(filtrado.length == 0 || filtrado == null) {
        alert(`Nenhum carro encontrado`)
        return
    }

    subtitulo.textContent = `Lista de carros com valor até ${filtro}`

    listaTxt.textContent = lista
})