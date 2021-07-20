function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))
console.log(criarProduto('iMac', 2199.49))
console.log(criarProduto('iPod', 2199.49))
