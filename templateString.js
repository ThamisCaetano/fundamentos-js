const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!` // as funções são escritas entre crases com o '$' e chaves
console.log(concatenacao, template)

// expressões
console.log(`1 + 1 = ${1 + 1}`) //tudo o que for entre o dólar e as chaves, é uma função

const up = texto => texto.toUpperCase()
console.log(`Eii... ${up('cuidaddo')}!`)