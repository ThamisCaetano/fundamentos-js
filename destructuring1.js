//novo recurso do ES2015
//tenha certeza de que o caminho até o objeto aninhado está limpo

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logadouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa 
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {logadouro, numero, cep}} = pessoa
console.log(logadouro, numero, cep)