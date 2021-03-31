let isAtivo = false //priorizar constantes ao invés de variáveis
console.log(isAtivo)

isAtivo = true 
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) // ! negativo  | !! dupla negativa se torna verdadeiro

console.log('os verdadeiros...')
console.log(!!!3)
console.log(!!-1)
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = 'Thais'
console.log(nome || 'Desconhecido')
