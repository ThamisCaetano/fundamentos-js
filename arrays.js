//é uma estrutura indexada e heterogênea

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //função que adiciona novos elementos em um array
console.log(valores)

console.log(valores.pop()) //função que retorna o último valor do array, ele retira do array esse valor
delete valores[0] //retirou do array o primeiro item
console.log(valores)

console.log(typeof valores)