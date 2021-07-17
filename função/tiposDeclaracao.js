//ele executa as funções primeiro
console.log(soma(3, 4))


//function declaration
function soma(x, y) {
    return x + y
}

//function expression (quando declaramos a função em um variável)
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) //preciso chamar ela dps pq a variável foi declarada dentro da function



//named function expression (além de ter uma const e ser uma função anônima)
//bem pouco usada
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4)) //preciso chamar ela dps pq a variável foi declarada dentro da function
