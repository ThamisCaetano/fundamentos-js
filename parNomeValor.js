//par nome/valor

const saudacao = 'Opa' //contexto léxico 1 

function exec() {
    const saudacao = 'Faaaala' //contexto léxico 2
    return saudacao
}

//objetos são gruos aninhados de pares nomes/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logadouro: 'Rua Muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)