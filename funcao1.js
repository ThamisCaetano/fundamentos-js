/*função é um bloco de códigos, ele agrupa várias sentenças de código
ou as vezes, nenhuma
esse bloco de código tem um nome
a função recebe parâmetros de entrada e executa os algorítmos, retornando algum valor
algumas funções não recebem parâmetros, elas podem não retornar dado,
há várias combinações que podem ser feitas
*/

// Função sem retorno 
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)  //segundo valor se torna undefined
imprimirSoma(2, 10, 4, 5, 6, 7, 8) //flexibilidades da linguagem

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())