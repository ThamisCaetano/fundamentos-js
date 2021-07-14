const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
//direto dentro do parâmetro
imprimirResultado(3, 4, function(x, y) {
    return x - y
})
//arrow function sempre será anônima
imprimirResultado(3, 4, (x, y) => x * y)

//função dentro de um objeto
const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}
