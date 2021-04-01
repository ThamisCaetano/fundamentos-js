let valor // não incializada , nada foi atribuído a ela
console.log(valor)

valor = null // ausência de valor | usada para zerar valor de uma variável
console.log(valor)
//console.log(valor.toString()) // ERRO!!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete.produto.preco // maneira correta de tirar o atributo de um obj
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)