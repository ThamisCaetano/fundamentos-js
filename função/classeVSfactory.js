//classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const p2 = new Pessoa('Ana')
p2.falar()

const p3 = new Pessoa('Iris')
p3.falar()

const p4 = new Pessoa('Paul')
p4.falar()


//função factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const pessoa1 = criarPessoa('Sun')
pessoa1.falar()