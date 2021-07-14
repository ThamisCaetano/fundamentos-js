
//passar uma função para outra função
//quando determinado evento occorer, essa função é executada

const fabricantes = ["Mercedes", "Audi", "BMW"]
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})

//exemplo com a arrow function
fabricantes.forEach(fabricante => console.log(fabricante))