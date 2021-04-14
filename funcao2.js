//pegar a função e atribuir uma variável é um fator importante

// armazenando uma função em uma variável
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 3))

//utilizando só um parâmetro
const imprimir2 = a => console.log(a)
imprimir2('Legal!!')