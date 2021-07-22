//exercício 1
function Operacoes(valor1, valor2) {
  console.log(valor1 + valor2, valor1 - valor2, valor1 * valor2, valor1 / valor2)
}

Operacoes(10, 5)

//exercício 2
function triangulo(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))